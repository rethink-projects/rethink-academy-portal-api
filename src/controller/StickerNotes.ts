import { Request, Response } from "express";
import { prismaInstance } from "../../database/prismaClient";

type StickerNotesProps = {
  description: string;
  data: string;
  priority: number;
  email: string;
};

const getStickerNotesByUserEmail = async (request: Request, response: Response) => {
  try {
    const { email }: { email?: string } = request.params;

    const user = await prismaInstance.user.findFirst({
      where: { email },
    });

    if (!user) throw new Error("Usuário não encontrado");

    const stickerNotes = await prismaInstance.stickerNotes.findMany({
      where: {
        userId: user.id,
      },
    });

    return response.status(200).json({ stickerNotes });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const createstickerNotes = async (request: Request, response: Response) => {
  try {
    const {
      description,
      data,
      priority,
      email,
    }: StickerNotesProps = request.body;
    console.log(request.body)
    if (!email) throw new Error("Email obrigatório");

    const user = await prismaInstance.user.findFirst({
      where: { email },
    });
    if (!user) throw new Error("Usuário não encontrado");

    const stickerNotes = await prismaInstance.stickerNotes.create({
      data: {
        description,
        data,
        priority,
        userId: user.id,
      },
    });

    return response.status(200).json({
      stickerNotes,
      message: `Lembrete criado com sucesso para o user: ${user.id}`,
    });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const removeStickerNotes = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    await prismaInstance.stickerNotes.delete({
      where: {id},
    });

    return response
      .status(200)
      .json({ message: "Lembrete deletado com sucesso." });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const updateStickerNotes = async (request: Request, response: Response) => {
  const { id } = request.params;
  const {
    description,
    data,
    priority,
    email,
  }: StickerNotesProps = request.body;

  if (!email) throw new Error("Email obrigatório");

  const user = await prismaInstance.user.findFirst({
    where: { email },
  });
  if (!user) throw new Error("Usuário não encontrado");

  try {
    const stickerNotes = await prismaInstance.stickerNotes.update({
      where: {id},
      data: {
        description,
        data,
        priority,
        userId: user.id,
      },
    });

    return response
      .status(200)
      .json({ stickerNotes, message: "Lembrete alterado com sucesso." });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

export default { getStickerNotesByUserEmail, createstickerNotes, removeStickerNotes, updateStickerNotes };