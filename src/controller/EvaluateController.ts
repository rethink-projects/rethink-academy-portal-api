import { Request, Response } from "express";
import { prismaInstance } from "../../database/prismaClient";
import { skillLibrary, skillLibraryType } from "../Helper/skillLibrary";

const create = async (request: Request, response: Response) => {
  console.log("entrou");
  const {
    month,
    userEmail,
    skillType,
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6,
  }: {
    month: string;
    userEmail: string;
    skillType: boolean;
    skill1: number;
    skill2: number;
    skill3: number;
    skill4: number;
    skill5: number;
    skill6: number;
  } = request.body;
  try {
    const userByEmail = await prismaInstance.user.findFirst({
      where: { email: userEmail },
    });

    console.log({ userByEmail });

    if (!userByEmail) throw new Error("Usuário não encontrado");

    const monthEvaluate = await prismaInstance.monthEvaluate.create({
      data: {
        month,
        userId: userByEmail.id,
        skillType,
        skill1,
        skill2,
        skill3,
        skill4,
        skill5,
        skill6,
      },
    });

    return response
      .status(200)
      .json({ monthEvaluate, message: "Nota criada com sucesso." });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const getEvaluates = async (request: Request, response: Response) => {
  try {
    const { month } = request.params;

    const users = await prismaInstance.user.findMany({
      where: { role: "STUDENT" },
    });

    console.log({ users });

    const usersMap = users.map(async (user) => {
      const evaluate = await prismaInstance.monthEvaluate.findFirst({
        where: { userId: user.id, month },
      });
      if (!evaluate) {
        return {
          month,
          userId: user.id,
          skillType: true,
          skill1: 0,
          skill2: 0,
          skill3: 0,
          skill4: 0,
          skill5: 0,
          skill6: 0,
          main: user.main,
          name: `${user.name} ${user.surname}`,
        };
      }
      console.log({ evaluate });
      return {
        ...evaluate,
        main: user.main,
        name: `${user.name} ${user.surname}`,
      };
      // return { name: `teste`, ...evaluate };
    });

    console.log({ usersMap });

    return response.status(200).json(await Promise.all(usersMap));
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const update = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const {
      value,
      main,
      userId,
      skill,
      month,
      skillType,
    }: {
      value: string;
      main: string;
      userId?: string;
      skill: string;
      month?: string;
      skillType?: boolean;
    } = request.body;

    let helper = skillLibrary[main][skill];

    const evaluateUpdated = await prismaInstance.monthEvaluate.update({
      where: { id },
      data: { [helper]: value },
    });

    return response
      .status(200)
      .json({ evaluateUpdated, message: "Avaliação alterada com sucesso." });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const remove = async (request: Request, response: Response) => {
  const { id } = request.params;
  console.log({ id });
  try {
    await prismaInstance.monthEvaluate.delete({
      where: { id },
    });

    return response
      .status(200)
      .json({ message: "Avaliação deletada com sucesso." });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

export default { getEvaluates, create, update, remove };
