import { Request, Response } from "express";
import { prismaInstance } from "../../database/prismaClient";

type TasksProps = {
  name: string;
  description: string;
  taskDate: string;
  startDate?: string;
  endDate?: string;
  startTime: string;
  endTime: string;
  tags: string;
  status: string;
  userEmail: string;
  duration?: string;
  time?: string;
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

const timeKeeper = (time: string) => {
  const interval = time.split(":");
  const realTime = parseInt(interval[0]) * 60 + parseInt(interval[1]);
  return realTime;
};

const convertTime = (time: number) => {
  let hours = time / 60;
  let minutes = time % 60;

  const timeConvert = {
    hours: Math.trunc(hours),
    minutes: minutes,
  };

  return timeConvert;
};

const timeToString = (time: number) => {
  let hours = Math.trunc(time / 60);
  let minutes = time % 60;

  return `${hours}h${minutes < 10 ? "0" + minutes : minutes}`;
};

const addDayToEndDate = (transform: Date) => {
  let data = new Date(transform);
  data.setDate(data.getDate() + 1);
  return data;
};

const monthLibrary = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const convertMonth = (date: string) => {
  let helper = date.split("T");
  let date2 = helper[0].split("-");

  let day = date2[2];
  let month = monthLibrary[Number(date2[1]) - 1];

  return `${day} de ${month}`;
};

const getTaskByUserEmail = async (request: Request, response: Response) => {
  try {
    const { email } = request.params;
    const { startDate, endDate }: { startDate?: Date; endDate?: Date } =
      request.body;

    const user = await prismaInstance.user.findFirst({
      where: { email },
    });
    // console.log({ email });
    // console.log({ startDate });
    // console.log({ endDate });
    // addDayToEndDate(endDate!);
    //   lte: new Date(2022, 7, 29).toISOString(),
    //   gte: new Date(2022, 7, 23).toISOString(),

    let AND: any = [];
    if (email) {
      AND.push({ userId: user!.id });
    }

 

    if (startDate && endDate) {
      AND.push({ taskDate: { gte: new Date(startDate) } });
      AND.push({ taskDate: { lte: addDayToEndDate(endDate) } });
    }

    const tasks = await prismaInstance.tasks.findMany({
      orderBy: { taskDate: "asc" },
      where: {
        AND,
      },
    });

    let helper = {};
    tasks.map((task) => {
      
      if (!helper[task.taskDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'})]) {
        helper[task.taskDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'})] = [];
      }

      helper[task.taskDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'})].push({
        ...task,
        duration: timeToString(
          timeKeeper(task.endTime) - timeKeeper(task.startTime)
        ),
        taskDate: convertMonth(task.taskDate.toISOString()),
      });
    });

    const studentTasks: any = [];
    for (const key in helper) {
      studentTasks.push(helper[key]);
    }

    return response.status(200).json(studentTasks);
  } catch (error) {
    console.log(error);
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

const composeDate = (day: string, month: string, year: string) => {
  return new Date(`${year}-${month}-${day}`);
};

const getGroupTaskByTag = async (request: Request, response: Response) => {
  try {
    const { email }: { email?: string } = request.params;

    const { currentDate }: { currentDate: Date } = request.body;

    if (!email) throw new Error("Email obrigatório");

    const user = await prismaInstance.user.findFirst({
      where: { email },
    });
    if (!user) throw new Error("Usuário não encontrado");

    let AND: any = [];
    if (email) {
      AND.push({ userId: user!.id });
    }

    const currentMonth = (new Date(currentDate).getMonth() + 1).toString();
    const currentYear = new Date(currentDate).getFullYear().toString();

    const startDate = composeDate("01", currentMonth, currentYear);
    const lastDay = new Date(
      startDate.getFullYear(),
      startDate.getMonth() + 1,
      0
    )
      .getDate()
      .toString();

    const endDate = composeDate(lastDay, currentMonth, currentYear);

    AND.push({ taskDate: { gte: new Date(startDate) } });
    AND.push({ taskDate: { lte: new Date(endDate) } });

    const groupTasks = await prismaInstance.tasks.findMany({
      where: {
        AND,
      },
    });

    let helper = {};
    groupTasks.forEach((item) => {
      if (helper[item.tags]) {
        helper[item.tags].realTime +=
          timeKeeper(item.endTime) - timeKeeper(item.startTime);
      } else {
        helper[item.tags] = {};
        helper[item.tags].realTime =
          timeKeeper(item.endTime) - timeKeeper(item.startTime);
      }
    });

    const arrayHelper: any[] = [];

    for (const key in helper) {
      arrayHelper.push({
        title: key,
        realTime: helper[key].realTime,
        ...convertTime(helper[key].realTime),
      });
    }

    return response.status(200).json(arrayHelper);
  } catch (error) {
    console.log(error);
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const getRecordOfDay = async (request: Request, response: Response) => {
  try {
    const { email }: { email?: string } = request.params;

    if (!email) throw new Error("Email obrigatório");

    const user = await prismaInstance.user.findFirst({
      where: { email },
    });
    if (!user) throw new Error("Usuário não encontrado");

    let AND: any = [];
    if (email) {
      AND.push({ userId: user!.id });
    }

    const date = new Date();
    const modifiedDate = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);

    const separateDate = (modifiedDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'})).split("/");

    const startDate = composeDate(separateDate[0], separateDate[1], separateDate[2]);
    const endDate = composeDate((parseInt(separateDate[0]) + 1).toString(), separateDate[1], separateDate[2])

    AND.push({ taskDate: { gte: startDate } });
    AND.push({ taskDate: { lte: endDate } });

    const recordsDay = await prismaInstance.tasks.findMany({
      orderBy: [
        {
          status: "desc",
        },
      ],
      where: {
        AND,
      },
    });

    const arrayHelper: any[] = [];

    for (const key in recordsDay) {
      arrayHelper.push({
        id: recordsDay[key].id,
        name: recordsDay[key].name,
        status: recordsDay[key].status,
        time:
          timeKeeper(recordsDay[key].endTime) -
          timeKeeper(recordsDay[key].startTime),
        ...convertTime(
          timeKeeper(recordsDay[key].endTime) -
            timeKeeper(recordsDay[key].startTime)
        ),
      });
    }

    return response.status(200).json(arrayHelper);
  } catch (error) {
    console.log(error);
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

export default {
  getTaskByUserEmail,
  createTask,
  removeTask,
  updateTask,
  getGroupTaskByTag,
  getRecordOfDay,
};