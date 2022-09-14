import { Request, Response } from "express";
import { prismaInstance } from "../../database/prismaClient";

type CommentsProps = {
  id: string;
  text: string;
  userEmail: string;
};

const getCommentsByUserEmail = async (request: Request, response: Response) => {
  try {
    const { email } = request.params;

    const user = await prismaInstance.user.findFirst({
      where: { email },
    });

    if (!user) throw new Error("Usuário não encontrado!");

    const studentComments = await prismaInstance.comments.findMany({
      where: { userId: user.id },
      include: { CommmentAuthor: true },
    });

    return response.status(200).json(studentComments);
  } catch (error) {
    console.log(error);
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error: error.message });
  }
};

const createComment = async (request: Request, response: Response) => {
  try {
    const { text, userEmail }: CommentsProps = request.body;
    if (!userEmail) throw new Error("Email obrigatório");

    const user = await prismaInstance.user.findFirst({
      where: { email: userEmail },
    });
    if (!user) throw new Error("Usuário não encontrado");

    const comment = await prismaInstance.comments.create({
      data: {
        text,
        userId: user.id,
      },
    });

    return response.status(200).json({
      comment,
      message: `Comentário criado com sucesso para o user: ${user.id}`,
    });
  } catch (error) {
    console.log({ error });
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error: error.message });
  }
};

const removeComment = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    await prismaInstance.comments.delete({
      where: { id },
    });

    return response
      .status(200)
      .json({ message: "Comentário deletado com sucesso." });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error: error.message });
  }
};

export default {
  getCommentsByUserEmail,
  createComment,
  removeComment,
};
