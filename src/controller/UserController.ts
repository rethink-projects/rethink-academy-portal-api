import { Request, Response } from "express";
import { prismaInstance } from "../../database/prismaClient";
import { differenceInDays } from "date-fns";

const levelMaker = () => {
  let level = 0;
  let startLevel = new Date(2022, 2, 7);
  let endLevel = new Date(2022, 8, 22);
  const between = differenceInDays(new Date(), startLevel);
  let timeNow = new Date(2022, 4, 1).getHours();
  let rex: number = between * 24 + timeNow;
  level = Math.trunc(rex / 48);
  let exp = rex % 48;
  if (endLevel < new Date()) {
    level = 100;
  }
  return {
    level,
    exp,
  };
};

const create = async (request: Request, response: Response) => {
  const { email, role, name, surname, avatar } = request.body;
  try {
    if (!email) {
      return response
        .status(400)
        .json({ message: "Campo email é obrigatorio." });
    }
    const user = await prismaInstance.user.create({
      data: {
        name,
        surname,
        email,
        role,
        avatar: avatar
          ? avatar
          : `https://ui-avatars.com/api/?name=${name}+${surname}`,
      },
    });
    return response
      .status(200)
      .json({ user, message: "Usuário criado com sucesso" });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error: error.message });
  }
};

const getAll = async (request: Request, response: Response) => {
  try {
    const {
      main,
      role,
    }: {
      main?: "ENGINEERING" | "DESIGN" | "PRODUCT";
      role?: "STUDENT" | "EMBASSADOR" | "RETHINKER";
    } = request.query;

    const users = await prismaInstance.user.findMany({
      where: { main, role },
    });
    const userWithLevel = users.map((item) => {
      return {
        ...item,
        ...levelMaker(),
      };
    });
    return response.status(200).json(userWithLevel);
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error: error.message });
  }
};

const getUserByEmail = async (request: Request, response: Response) => {
  const { email } = request.params;

  try {
    const user = await prismaInstance.user.findFirst({
      where: { email },
    });

    const userWithLevel = { ...user, ...levelMaker() };

    return response.status(200).json(userWithLevel);
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error: error.message });
  }
};

const update = async (request: Request, response: Response) => {
  try {
    const {
      role,
      name,
      surname,
      main,
      avatar,
    }: {
      email: string;
      role?: "STUDENT" | "EMBASSADOR" | "RETHINKER";
      name?: string;
      surname?: string;
      avatar?: string;
      main?: "ENGINEERING" | "DESIGN" | "PRODUCT";
    } = request.body;
    const email: string = request.params.email;
    const updatedUser = await prismaInstance.user.update({
      where: {
        email,
      },
      data: {
        role,
        name,
        surname,
        main,
        avatar,
      },
    });
    return response.status(200).json({ updatedUser });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error: error.message });
  }
};

export default { create, getUserByEmail, getAll, update, levelMaker };
