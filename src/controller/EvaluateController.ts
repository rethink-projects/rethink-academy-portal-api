import { Request, Response } from "express";
import { prismaInstance } from "../../database/prismaClient";

const create = async (request: Request, response: Response) => {
  console.log("entrou");
  const {
    month,
    userEmail,
    skill,
    title,
    value,
  }: {
    month: string;
    userEmail: string;
    skill: boolean;
    title: string;
    value: number;
  } = request.body;
  try {
    const userByEmail = await prismaInstance.user.findFirst({
      where: { email: userEmail },
    });

    console.log({ userByEmail });

    if (!userByEmail) throw new Error("Usuário não encontrado");

    const monthEvaluate = await prismaInstance.monthEvaluate.findFirst({
      where: { month },
    });

    console.log({ monthEvaluate });

    let newMonthEvaluate;
    if (!monthEvaluate) {
      newMonthEvaluate = await prismaInstance.monthEvaluate.create({
        data: { month },
      });
      console.log({ newMonthEvaluate });
    }
    // monthEvaluateId = newMonthEvaluate.id;
    let monthEvaluateId = monthEvaluate
      ? monthEvaluate.id
      : newMonthEvaluate.id;
    console.log({ monthEvaluateId });

    const evaluate = await prismaInstance.evaluate.create({
      data: {
        monthEvaluateId,
        userId: userByEmail.id,
        skill,
        title,
        value,
      },
    });

    console.log(evaluate);

    return response
      .status(200)
      .json({ evaluate, message: "Nota criada com sucesso." });
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const getEvaluates = async (request: Request, response: Response) => {
  try {
    const { month } = request.params;

    const monthEvaluate = await prismaInstance.monthEvaluate.findFirst({
      where: { month },
      include: {
        evaluate: { include: { user: true } },
      },
    });

    let filteredDataObj = {};
    monthEvaluate!.evaluate.map((evaluate) => {
      if (!filteredDataObj[evaluate.user.id]) {
        filteredDataObj[evaluate.user.id] = {};
        filteredDataObj[
          evaluate.user.id
        ].user = `${evaluate.user.name} ${evaluate.user.surname}`;
        filteredDataObj[evaluate.user.id].trail = evaluate.user.trail;
        filteredDataObj[evaluate.user.id].hardSkills = [];
        filteredDataObj[evaluate.user.id].softSkills = [];
      }
      if (evaluate.skill) {
        filteredDataObj[evaluate.user.id].hardSkills.push({
          title: evaluate.title,
          value: evaluate.value,
        });
      } else {
        filteredDataObj[evaluate.user.id].softSkills.push({
          title: evaluate.title,
          value: evaluate.value,
        });
      }
      return;
    });

    let filteredData: any[] = [];
    for (const key in filteredDataObj) {
      // console.log({[key]: filteredDataObj[key]})
      filteredData.push(filteredDataObj[key]);
    }

    return response.status(200).json(filteredData);
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error });
  }
};

const update = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const { value } = request.body;

    const evaluateUpdated = await prismaInstance.evaluate.update({
      where: { id },
      data: { value },
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
    await prismaInstance.evaluate.delete({
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
