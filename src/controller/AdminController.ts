// import { Request, Response } from "express";
// import { prismaInstance, Main } from "../../database/prismaClient";

// const isCompleted = () => {
// }

// const courses = {
//     curso1: {
//         user1: {
//             completedModules: 10,
//         },
//         user2: {
//             completedModules: 20,
//         }
//     }
// }

// const getProgress = async (request: Request, response: Response) => {

//   try {
//     const user = await prismaInstance.user.findMany({
//         where: { main: trailId },
//     });

//     const { trailId }: { trailId?: string } = request.query;
//     const courses = await prismaInstance.course.findMany({
//       where: { trailId },
//       include: {
//         trail: true,
//         modules: {
//           include: {
//             course: true,
//             lessons: true,
//           },
//         },
//       },
//     });

//     const maxLessons = courses.map((course) => {
//       let lessonsLength: any = [];
//       let userLessonsLength: any = [];
//       course.modules.map((module) => {
//         module.lessons.map((lesson) => {
//           if (user?.watched.includes(lesson.id)) {
//             userLessonsLength.push(lesson.id);
//           } else {
//             moduleCompleted = false;
//           }
//           lessonsLength.push(lesson.id);
//         });
//         // return {  };
//       });

//       let completed: boolean = false;
//       if (
//         lessonsLength.length !== 0 &&
//         lessonsLength.length == userLessonsLength.length
//       ) {
//         completed = true;
//       }

//       return {
//         lessonsLength: lessonsLength.length,
//         userLessonsLength: userLessonsLength.length,
//         completed,
//         name: course.name,
//         id: course.id,
//         trail: course.trail,
//         type: course.type,
//       };
//     });

//     return response.status(200).json({ maxLessons, user });
//   } catch (error) {
//     return response
//       .status(400)
//       .json({ message: "Algo de errado aconteceu.", error });
//   }
// };

// export default {
//   getProgress,
// };
