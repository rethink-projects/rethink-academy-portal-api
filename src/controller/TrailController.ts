import { Request, Response } from "express";
import { prismaInstance } from "../../database/prismaClient";

const create = async (request: Request, response: Response) => {
  const { name, description, weight } = request.body;
  try {
    const trail = await prismaInstance.trail.create({
      data: {
        name,
        weight,
        description,
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
    const trail = await prismaInstance.trail.findMany(
      {
        orderBy: {
          weight: "asc"
        }
      }
    );

    return response.status(200).json({ trail });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const update = async (request: Request, response: Response) => {
  const { name, description } = request.body;
  const { id } = request.params;
  try {
    const trail = await prismaInstance.trail.update({
      where: { id },
      data: {
        name,
        description,
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
export default { create, getAll, update, deleteById };
