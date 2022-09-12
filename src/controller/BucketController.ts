import { Request, Response } from "express";
import { prismaInstance } from "../../database/prismaClient";

const upsert = async (request: Request, response: Response) => {
  const { title, email, url } = request.body;
  try {
    if (!email) throw new Error("não tem user");

    const user = await prismaInstance.user.findFirstOrThrow({
      where: { email },
    });

    const data = await prismaInstance.bucket.upsert({
      where: { userId: user.id },
      create: {
        title,
        userId: user.id,
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

const getOneBucket = async (request: Request, response: Response) => {
  try {
    const { email }: { email?: string } = request.query;
    const { title } = request.params;
    if (!email) throw new Error("não tem user");

    const user = await prismaInstance.user.findFirstOrThrow({
      where: { email },
    });

    const data = await prismaInstance.bucket.findFirstOrThrow({
      where: { userId: user.id, title },
    });
    response.status(200).json(data);
  } catch (error) {
    return response.status(400).json(error.message);
  }
};

const getUserBucket = async (request: Request, response: Response) => {
  try {
    const { email }: { email?: string } = request.query;
    if (!email) throw new Error("não tem user");

    const user = await prismaInstance.user.findFirstOrThrow({
      where: { email },
    });

    const data = await prismaInstance.bucket.findMany({
      where: { userId: user.id },
    });
    response.status(200).json(data);
  } catch (error) {
    return response.status(400).json(error.message);
  }
};

export default { upsert, getOneBucket, getUserBucket };
