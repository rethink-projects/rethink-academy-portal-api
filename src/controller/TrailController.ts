import { Request, Response } from "express";
import internal from "stream";
import { prismaInstance } from "../../database/prismaClient";

type TrailType = {
  name: string;
  description: string;
  weight: number;
  imageUrl: string;
};

const create = async (request: Request, response: Response) => {
  const { name, description, weight, imageUrl }: TrailType = request.body;
  try {
    const trail = await prismaInstance.trail.create({
      data: {
        name,
        weight,
        description,
        imageUrl,
      },
    });
    return response
      .status(201)
      .json({ trail, message: "Trilha criada com sucesso" });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const getAll = async (request: Request, response: Response) => {
  try {
    const trail = await prismaInstance.trail.findMany({
      orderBy: {
        weight: "asc",
      },
    });

    return response.status(200).json({ trail });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const getTrailById = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const trail = await prismaInstance.trail.findUnique({
      where: {
        id,
      },
      // include: {
      //   course: {
      //     include: {
      //       trail: true,
      //     },
      //   },
      // },
      // include: {
      // teacher: true,
      // trail: true,
      // },
    });

    return response.json({ trail });
  } catch (error) {
    return response.json({ message: "Algo de errado aconteceu.", error });
  }
};

//   try {
//     const user = await prismaInstance.user.findUnique({
//       where: { email },
//       include: {
//         profile: true,
//       },
//     });
//     return response.status(200).json({ user });
//   } catch (error) {
//     return response
//       .status(400)
//       .json({ message: "Algo de errado aconteceu.", error });
//   }
// };

const update = async (request: Request, response: Response) => {
  const { name, description, imageUrl } = request.body;
  const { id } = request.params;
  try {
    const trail = await prismaInstance.trail.update({
      where: { id },
      data: {
        name,
        description,
        imageUrl,
      },
    });

    return response
      .status(200)
      .json({ trail, message: "Trilha atualizada com sucesso" });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const deleteById = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    const trail = await prismaInstance.trail.delete({
      where: { id },
    });

    return response
      .status(200)
      .json({ trail, message: "Trilha deletada com sucesso" });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};
export default { create, getAll, update, deleteById, getTrailById };
