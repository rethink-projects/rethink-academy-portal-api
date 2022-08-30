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

const timeKeeper = (time: string) => {
  const interval = time.split(":");
  const realTime = (parseInt(interval[0]) * 60) + parseInt(interval[1]);
  return realTime;
}

const convertTime = (time: number) => {
  let hours = time / 60;
  let minutes = time % 60;

  const timeConvert = {
    hours: Math.trunc(hours),
    minutes: minutes
  }

  return timeConvert;
}

const getGroupTaskByTag = async (request: Request, response: Response) => {  
  try {

    const { email }: { email?: string } = request.params;

    if (!email) throw new Error("Email obrigatório");

    const user = await prismaInstance.user.findFirst({
      where: { email },
    });
    if (!user) throw new Error("Usuário não encontrado");

    const groupTasks = await prismaInstance.tasks.findMany();

    let helper = {};
    groupTasks.forEach((item) => {
      if(helper[item.tags]){
        helper[item.tags].realTime += timeKeeper(item.endTime) - timeKeeper(item.startTime);
      } else {
        helper[item.tags] = {};
        helper[item.tags].realTime = timeKeeper(item.endTime) - timeKeeper(item.startTime);
      }
    })

    const arrayHelper: any[] = [];

    for (const key in helper) {
      arrayHelper.push({title: key, realTime: helper[key].realTime, ...convertTime(helper[key].realTime)});
    }

    return response
    .status(200)
    .json(arrayHelper);
  } catch(error){
    console.log(error)
    return response
    .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

export default { getTaskByUserEmail, createTask, removeTask, updateTask, getGroupTaskByTag };
