import { Request, Response } from "express";
import { prismaInstance } from "../../database/prismaClient";

const create = async (request: Request, response: Response) => {
  const { email, role, name, surname, main } = request.body;
  try {
    if (!email) {
      return response
        .status(400)
        .json({ message: "Campo email é obrigatorio." });
    }
    const user = await prismaInstance.user.create({
      data: {
        name,
        surname,
        email,
        main,
        role,
      },
    });
    return response
      .status(200)
      .json({ user, message: "Usuário criado com sucesso" });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const profile = async (request: Request, response: Response) => {
  const { userId, social, bio, avatar } = request.body;
  try {
    await prismaInstance.profile.upsert({
      where: { userId },
      create: {
        userId,
        bio,
        avatar,
        social: {
          ...social,
        },
      },
      update: {
        userId,
        bio,
        avatar,
        social: {
          ...social,
        },
      },
    });
    return response.status(200).json({
      message: `Perfil criado com sucesso para o userid: ${userId}`,
    });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const getAll = async (request: Request, response: Response) => {
  try {
    const { main }: { main?: "ENGINEERING" | "DESIGN" | "PRODUCT" } =
      request.query;

    const users = await prismaInstance.user.findMany({
      where: { main: main },
      include: {
        profile: true,
      },
    });
    return response.status(200).json(users);
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const getUserByEmail = async (request: Request, response: Response) => {
  const { email } = request.params;
  console.log({ params: request.params });

  try {
    const user = await prismaInstance.user.findUnique({
      where: { email },
      include: {
        profile: true,
        course: true,
      },
    });
    return response.status(200).json({ user });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const createWatched = async (request: Request, response: Response) => {
  const { email } = request.params;
  const { watchedId } = request.body;
  try {
    const user = await prismaInstance.user.findFirst({
      where: { email },
      select: {
        watched: true,
      },
    });

    user?.watched.push(watchedId);

    const userUpdated = await prismaInstance.user.update({
      where: { email },
      data: {
        watched: user?.watched,
      },
    });

    return response.status(200).json(userUpdated);
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const getWatched = async (request: Request, response: Response) => {
  const { email } = request.params;
  try {
    const user = await prismaInstance.user.findFirst({
      where: { email },
    });

    const { trailId }: { trailId?: string } = request.query;
    const courses = await prismaInstance.course.findMany({
      where: { trailId },
      include: {
        trail: true,
        modules: {
          include: {
            course: true,
            lessons: true,
          },
        },
      },
    });

    const maxLessons = courses.map((course) => {
      let lessonsLength: any = [];
      let userLessonsLength: any = [];
      course.modules.map((module) => {
        module.lessons.map((lesson) => {
          if (user?.watched.includes(lesson.id)) {
            userLessonsLength.push(lesson.id);
          }
          lessonsLength.push(lesson.id);
        });
      });

      let completed: boolean = false;
      if (
        lessonsLength.length !== 0 &&
        lessonsLength.length == userLessonsLength.length
      ) {
        completed = true;
      }

      return {
        lessonsLength: lessonsLength.length,
        userLessonsLength: userLessonsLength.length,
        completed,
        name: course.name,
        id: course.id,
        trail: course.trail,
        type: course.type,
      };
    });

    return response.status(200).json({ maxLessons, user });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

export default {
  create,
  profile,
  getAll,
  getUserByEmail,
  createWatched,
  getWatched,
};
