import { Request, Response } from "express";
import { prismaInstance } from "../../database/prismaClient";
const upsert = async (request: Request, response: Response) => {
  try {
    const { title, userId, url } = request.body;
    const data = await prismaInstance.bucket.upsert({
      where: { userId },
      create: {
        title,
        userId,
        url,
      },
      update: {
        title,
        url,
      },
    });
    response.status(200).json(data);
  } catch (error) {
    return response.status(400).json(error.message);
  }
};

const getBucket = async (request: Request, response: Response) => {
  try {
    const { title, userId } = request.body;
    const data = await prismaInstance.bucket.findMany({
      where: { userId, title },
    });
    response.status(200).json(data);
  } catch (error) {
    return response.status(400).json(error.message);
  }
};
export default { upsert, getBucket };
