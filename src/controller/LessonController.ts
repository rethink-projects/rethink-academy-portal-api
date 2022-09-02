import { Request, Response } from "express";
import { prismaInstance } from "../../database/prismaClient";

const create = async (request: Request, response: Response) => {
  const { name, description, embedUrl, module } = request.body;
  try {
    const lesson = await prismaInstance.lesson.create({
      data: {
        name,
        embedUrl,
        description,
        module,
      },
    });
    return response
      .status(201)
      .json({ lesson, message: "Aula criada com sucesso" });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const getAll = async (request: Request, response: Response) => {
  try {
    const lessons = await prismaInstance.lesson.findMany();

    return response.status(200).json({ lessons });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const getById = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    let idCourse = "";
    const lesson = await prismaInstance.lesson.findFirst({
      where: {
        id,
      },
      select: {
        name: true,
        description: true,
        embedUrl: true,
      },
    });

    return response.status(200).json({ lesson });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const update = async (request: Request, response: Response) => {
  const { name, description, embedUrl, module } = request.body;
  const { id } = request.params;
  try {
    const lesson = await prismaInstance.lesson.update({
      where: { id },
      data: {
        name,
        embedUrl,
        description,
        module,
      },
    });
    return response
      .status(200)
      .json({ lesson, message: "Aula atualizada com sucesso" });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const deleteById = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    const lesson = await prismaInstance.lesson.delete({
      where: { id },
    });

    return response
      .status(200)
      .json({ lesson, message: "Aula deletada com sucesso" });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const getLessonsWatched = async (request: Request, response: Response) => {
  try {
    const { email, idLesson } = request.params;
    const user = await prismaInstance.user.findFirst({
      where: { email },
    });

    const { courseId }: { courseId?: string } = request.query;

    const course = await prismaInstance.course.findFirst({
      where: {
        id: courseId,
      },
      select: {
        name: true,
        modules: {
          orderBy: {
            cratedAt: "asc",
          },
          select: {
            lessons: {
              orderBy: {
                cratedAt: "asc",
              },
            },
            name: true,
            id: true,
          },
        },
      },
    });

    const nameCourse = course?.name;
    let moduleOrder = 0;
    let lessonOrder = 0;
    let ready = false;

    let moduleBlocked = false;
    let lastModuleCompleted = true;
    let moduleCompleted = true;
    let lessonCompleted = true;
    const modules = course?.modules.map((module, index) => {
      const lessons = module.lessons.map((lesson, index) => {
        if (lesson.id === idLesson) {
          lessonOrder = index + 1;
          ready = true;
        }

        if (!user?.watched.includes(lesson.id)) {
          moduleCompleted = false;
          lessonCompleted = false;
        }
        return {
          id: lesson.id,
          name: lesson.name,
          embedUrl: lesson.embedUrl,
          completed: lessonCompleted,
          description: lesson.description,
        };
      });

      if (ready) {
        ready = false;
        moduleOrder = index + 1;
      }

      if (index != 0) {
        if (lastModuleCompleted) moduleBlocked = false;
        else moduleBlocked = true;
      }
      lastModuleCompleted = moduleCompleted;

      return {
        moduleId: module.id,
        moduleName: module.name,
        moduleCompleted: moduleCompleted,
        lessons,
        moduleBlocked: moduleBlocked,
      };
    });

    return response
      .status(200)
      .json({ modules, nameCourse, moduleOrder, lessonOrder });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

export default {
  create,
  getAll,
  getById,
  update,
  deleteById,
  getLessonsWatched,
};
