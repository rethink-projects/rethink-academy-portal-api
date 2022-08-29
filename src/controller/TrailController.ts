import { Request, Response } from "express";
import { object } from "yup";
import { prismaInstance } from "../../database/prismaClient";

const getTrailById = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const trail = await prismaInstance.trail.findFirst({
      where: {
        id,
      },
      //   include: {
      // teacher: true,
      //     trail: true,
      //   },
    });

    return response.json(trail);
  } catch (error) {
    return response.json({ message: "Algo de errado aconteceu.", error });
  }
};

export default { getTrailById };
