import { Request, Response } from "express";
import { prismaInstance } from "../../database/prismaClient";

type TasksProps = {
  name: string;
  data: string;
  startTime: string;
  endTime: string;
  tags: string;
  status: string;
  description: string;
  email: string;
};

const getTaskByUserEmail = async (request: Request, response: Response) => {
  try {
    const { email }: { email?: string } = request.params;

    const user = await prismaInstance.user.findFirst({
      where: { email },
    });

    if (!user) throw new Error("Usuário não encontrado");

    const tasks = await prismaInstance.tasks.findMany({
      where: {
        userId: user.id,
      },
    });

    return response.status(200).json({ tasks });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const createTask = async (request: Request, response: Response) => {
  try {
    const {
      name,
      data,
      startTime,
      endTime,
      tags,
      status,
      description,
      email,
    }: TasksProps = request.body;
    if (!email) throw new Error("Email obrigatório");

    const user = await prismaInstance.user.findFirst({
      where: { email },
    });
    if (!user) throw new Error("Usuário não encontrado");

    const task = await prismaInstance.tasks.create({
      data: {
        name,
        data,
        startTime,
        endTime,
        tags,
        status,
        description,
        userId: user.id,
      },
    });

    return response.status(200).json({
      task,
      message: `Task criado com sucesso para o user: ${user.id}`,
    });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const removeTask = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    await prismaInstance.tasks.delete({
      where: {id},
    });

    return response
      .status(200)
      .json({ message: "Task deletada com sucesso." });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const updateTask = async (request: Request, response: Response) => {
  const { id } = request.params;
  const {
    name,
    data,
    startTime,
    endTime,
    tags,
    status,
    description,
    email,
  }: TasksProps = request.body;

  if (!email) throw new Error("Email obrigatório");

  const user = await prismaInstance.user.findFirst({
    where: { email },
  });
  if (!user) throw new Error("Usuário não encontrado");

  try {
    const task = await prismaInstance.tasks.update({
      where: {id},
      data: {
        name,
        data,
        startTime,
        endTime,
        tags,
        status,
        description,
        userId: user.id,
      },
    });

    return response
      .status(200)
      .json({ task, message: "Task alterada com sucesso." });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

export default { getTaskByUserEmail, createTask, removeTask, updateTask };
