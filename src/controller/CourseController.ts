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
    type,
    teacherName,
    teacherDescription,
    imageTeacher,
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
        type,
        teacherName,
        teacherDescription,
        imageTeacher,
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

const getAllByCourseId = async (request: Request, response: Response) => {
  try {
    const course = await prismaInstance.course.findMany({
      orderBy: {
        cratedAt: "asc",
      },
      select: {
        id: true,
        name: true,
        description: true,
        level: true,
        workload: true,
        learning: true,
        skills: true,
        trailId: true,
        modules: true,
        type: true,
        teacherName: true,
        teacherDescription: true,
        imageTeacher: true,
      },
    });

    return response.status(200).json({ course });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

// const getById = async (request: Request, response: Response) => {
//   const { id } = request.params;

//   // const { moduleId }: { moduleId?: string } = request.query;
//   // const { moduleId }: { moduleId?: string } = request.query;

//   try {
//     const course = await prismaInstance.course.findFirst({
//       where: { id },
//       select: {
//         name: true,
//         modules: {
//           select: {
//             lessons: true,
//           },
//         },
//       },
//     });

//     // course?.modules.map((module) => {

//     // })

//     return response.status(200).json({ course });
//   } catch (error) {
//     return response
//       .status(400)
//       .json({ message: "Algo de errado aconteceu.", error });
//   }
// };
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
        // teacher: true,
      },
    });

    return response.status(200).json({ course });
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
    learning,
    skills,
    trailId,
    type,
    teacherName,
    teacherDescription,
    imageTeacher,
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
        type,
        teacherName,
        teacherDescription,
        imageTeacher,
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
export default {
  create,
  getAllByCourseId,
  update,
  deleteById,
  getById,
};
