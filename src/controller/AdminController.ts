import { Request, Response } from "express";
import { prismaInstance, Main } from "../../database/prismaClient";

/*
  pegar cada módulo
  | pegar o id das aulas de cada módulo

  pegar cada estudante (¿Dessa trilha ou de todas as trilhas?)
  | pegar o id de todas aulas concluidas
  
  comparar o id das aulas concluídas com cada módulo individualmente


*/
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
      select: {
        name: true,
        surname: true,
        watched: true,
        profile: {
          select: {
            avatar: true,
          },
        },
      },
    });

    const usersProgress = users.map((user) => {
      let userName;
      let userImg;
      let courseName;
      let modulesQnt;
      let modulesDone;
      let completedModules: Array<string> = [];
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
          console.log(module.id);
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
  getProgress,
};
