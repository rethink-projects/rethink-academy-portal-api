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

const getUserByEmail = async (request: Request, response: Response) => {
  const { email } = request.params;
  try {
    const user = await prismaInstance.user.findFirst({
      where: { email },
      include: {
        profile: true,
      },
    });
    return response.status(200).json({ user });
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

    const { trailId } = request.query;
    console.log(trailId)
    const courses = await prismaInstance.course.findMany({
      where: trailId ? { trailId } : {},
      include: {
        trail: true,
        modules: {
          include: {
            lessons: true
          }
        }
      }
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
      if (lessonsLength.length !== 0 && lessonsLength.length == userLessonsLength.length) {
        completed = true;
      }

      return { lessonsLength: lessonsLength.length, userLessonsLength: userLessonsLength.length, completed, name: course.name, id: course.id, trail: course.trail };
    })

    return response.status(200).json({ maxLessons, user });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

export default { create, profile, getUserByEmail, getWatched };
