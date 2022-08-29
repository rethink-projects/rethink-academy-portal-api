import { Request, Response } from "express";
import { prismaInstance } from "../../database/prismaClient";

type TasksProps = {
  name: string;
  description: string;
  taskDate: string;
  startTime: string;
  endTime: string;
  tags: string;
  status: string;
  userEmail: string;
};

type TasksPropsUpdate = {
  name?: string;
  description?: string;
  taskDate?: string;
  startTime?: string;
  endTime?: string;
  tags?: string;
  status?: string;
};

const getTaskByUserEmail = async (request: Request, response: Response) => {
  try {
    const { email } = request.params;
    const {
      startDate,
      endDate,
    }: { email?: string; startDate?: Date; endDate?: string } = request.query;

    const user = await prismaInstance.user.findFirst({
      where: { email },
    });
    // console.log({ startDate });
    // console.log({ endDate });

    //   lte: new Date(2022, 7, 29).toISOString(),
    //   gte: new Date(2022, 7, 23).toISOString(),

    let msg: any = "Sem parâmetros starDate endDate";

    let AND: any = [];
    if (email) {
      AND.push({ userId: user!.id });
    }

    if (startDate && endDate) {
      AND.push({ taskDate: { gte: new Date(startDate) } });
      AND.push({ taskDate: { lte: new Date(endDate) } });
      msg = { startDate, endDate };
    }

    const studentTasks = await prismaInstance.tasks.findMany({
      where: {
        AND,
      },
    });

    return response.status(200).json({ msg, studentTasks });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error: error.message });
  }
};

const createTask = async (request: Request, response: Response) => {
  try {
    const {
      name,
      taskDate,
      startTime,
      endTime,
      tags,
      status,
      description,
      userEmail,
    }: TasksProps = request.body;
    if (!userEmail) throw new Error("Email obrigatório");

    const user = await prismaInstance.user.findFirst({
      where: { email: userEmail },
    });
    if (!user) throw new Error("Usuário não encontrado");

    const task = await prismaInstance.tasks.create({
      data: {
        name,
        taskDate,
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
    console.log({ error });
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error: error.message });
  }
};

const removeTask = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    await prismaInstance.tasks.delete({
      where: { id },
    });

    return response.status(200).json({ message: "Task deletada com sucesso." });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error: error.message });
  }
};

const updateTask = async (request: Request, response: Response) => {
  const { id } = request.params;
  const {
    name,
    taskDate,
    startTime,
    endTime,
    tags,
    status,
    description,
  }: TasksPropsUpdate = request.body;

  try {
    const task = await prismaInstance.tasks.update({
      where: { id },
      data: {
        name,
        taskDate,
        startTime,
        endTime,
        tags,
        status,
        description,
      },
    });

    return response
      .status(200)
      .json({ task, message: "Task alterada com sucesso." });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error: error.message });
  }
};

export default { getTaskByUserEmail, createTask, removeTask, updateTask };
