import { Request, Response } from "express";
import { prismaInstance } from "../../database/prismaClient";

const create = async (request: Request, response: Response) => {
  const {
    name,
    description,
    level,
    workload,
    learning,
    skills,
    trailId,
    imageTeacher,
    teacherDescription,
    teacherName,
  } = request.body;
  try {
    const course = await prismaInstance.course.create({
      data: {
        name,
        description,
        level,
        workload,
        learning,
        skills,
        trailId,
        imageTeacher,
        teacherDescription,
        teacherName,
      },
    });
    return response
      .status(201)
      .json({ course, message: "Curso criado com sucesso" });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const getAllByTrailId = async (request: Request, response: Response) => {
  const { trailId } = request.params;
  try {
    const course = await prismaInstance.course.findMany({
      where: { trailId },
    });

    return response.status(200).json({ course });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const getById = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    const course = await prismaInstance.course.findFirst({
      where: { id },
      include: {
        modules: {
          include: {
            lessons: true,
          },
        
        },
        
      },
    });

    return response.status(200).json({ course });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const getAll = async (request: Request, response: Response) => {
  try {
    const course = await prismaInstance.course.findMany();

    return response.status(200).json({ course });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu aqui.", error });
  }
};

const getCourseModules = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    const modules = await prismaInstance.module.findMany({
      where: {
        courseId: {
          equals: id,
        },
      },
      select: {
        id: true,
        name: true,
        lessons: true,
      },
    });

    return response.status(200).json({ modules });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const update = async (request: Request, response: Response) => {
  const {
    name,
    description,
    level,
    workload,
    teacher,
    learning,
    skills,
    trailId,
  } = request.body;
  const { id } = request.params;
  try {
    const course = await prismaInstance.course.update({
      where: { id },
      data: {
        name,
        description,
        level,
        workload,
        learning,
        skills,
        trailId,
      },
    });
    return response
      .status(200)
      .json({ course, message: "Curso atualizado com sucesso" });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const deleteById = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    const course = await prismaInstance.course.delete({
      where: { id },
    });

    return response
      .status(200)
      .json({ course, message: "Curso deletado com sucesso" });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const getProgress = async (request: Request, response: Response) => {
  const trailId = request.params.id;

  try {
    const courses = await prismaInstance.course.findMany({
      where: { trailId },
      select: {
        id: true,
        name: true,

        modules: {
          select: {
            id: true,
            courseId: true,
            lessons: {
              select: {
                id: true,
                moduleId: true,
              },
            },
          },
        },
      },
    });

    let modulesQnt = 0;
    courses.map((course) => {
      modulesQnt += course.modules.length;
    });
    // console.log(courses);
    const users = await prismaInstance.user.findMany({
      where: { role: "STUDENT" },
      select: {
        name: true,
        surname: true,
        watched: true,
        role: true,
        profile: {
          select: {
            avatar: true,
          },
        },
      },
    });

    const usersProgress = users.map((user) => {
      let completedModules: string[] = [];
      let moduleCompleted;

      courses.map((course) => {
        course.modules.map((module) => {
          module.lessons.length !== 0
            ? (moduleCompleted = true)
            : (moduleCompleted = false);

          module.lessons.map((lesson) => {
            if (!user.watched.includes(lesson.id)) {
              moduleCompleted = false;
            }
          });

          moduleCompleted && completedModules.push(module.id);
          // console.log(module.id);
        });
      });

      return {
        userName: user.name + " " + user.surname,
        userImage:
          user.profile?.avatar ??
          `https://ui-avatars.com/api/?name=${user.name}+${user.surname}`,
        completedModules,
      };
    });
    return response.status(200).json({ courses, modulesQnt, usersProgress });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

export default {
  create,
  getAllByTrailId,
  update,
  deleteById,
  getById,
  getCourseModules,
  getProgress,
  getAll,
};
