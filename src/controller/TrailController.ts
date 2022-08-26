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
    // Reference: https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access
    const trail = await prismaInstance.$queryRaw` 
    SELECT * FROM Trail
    ORDER BY 
      ${"asc"}
    `;

    return response.status(200).json({ trail });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const update = async (request: Request, response: Response) => {
  const { name, description, weight } = request.body;
  const { id } = request.params;
  try {
    const trail = await prismaInstance.trail.update({
      where: { id },
      data: {
        name,
        description,
        weight,
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
