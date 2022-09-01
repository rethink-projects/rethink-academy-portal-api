import { Request, Response } from "express";
import { prismaInstance } from "../../database/prismaClient";

const create = async (request: Request, response: Response) => {
  const { name, description, embedUrl, order, module } = request.body;
  try {
    const lesson = await prismaInstance.lesson.create({
      data: {
        name,
        embedUrl,
        order,
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
    const lesson = await prismaInstance.lesson.findFirst({
      where: {
        id,
      },
      include: {
        module: {
          select: {
            order: true,
          },
        },
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
  const { name, description, embedUrl, order, module } = request.body;
  const { id } = request.params;
  try {
    const lesson = await prismaInstance.lesson.update({
      where: { id },
      data: {
        name,
        embedUrl,
        order,
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
    const { email } = request.params;

    const user = await prismaInstance.user.findFirst({
      where: { email },
    });

    const { courseId }: { courseId?: string } = request.query;

    const course = await prismaInstance.course.findFirst({
      where: {
        id: courseId,
      },
      select: {
        modules: {
          include: {
            lessons: true,
          },
        },
      },
    });

    const modules = course?.modules.map((module) => {
      let moduleCompleted = true;
      let lessonCompleted = true;
      const lessons = module.lessons.map((lesson) => {
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
          order: lesson.order,
        };
      });

      return {
        moduleId: module.id,
        moduleName: module.name,
        moduleCompleted: moduleCompleted,
        lessons,
      };
    });

    return response.status(200).json({ modules });
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
