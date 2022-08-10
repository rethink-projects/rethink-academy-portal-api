import { Request, Response } from "express";
import { prismaInstance } from "../../database/prismaClient";

const create = async (request: Request, response: Response) => {
    const { name, office, avatar } = request.body;
    try {
        const teacher = await prismaInstance.teacher.create({
            data: {
                name,
                office,
                avatar,
            },
        });
        return response
            .status(200)
            .json({ teacher, message: "Usuário criado com sucesso" });
    } catch (error) {
        return response
            .status(400)
            .json({ message: "Algo de errado aconteceu.", error });
    }
};

const getAll = async (request: Request, response: Response) => {
    try {
        const teachers = await prismaInstance.teacher.findMany();

        return response.status(200).json({ teachers });
    } catch (error) {
        return response
            .status(400)
            .json({ message: "Algo de errado aconteceu.", error });
    }
};

const getUserById = async (request: Request, response: Response) => {
    const { id } = request.params;
    try {
        const teacher = await prismaInstance.teacher.findFirst({
            where: { id },
        });
        return response.status(200).json({ teacher });
    } catch (error) {
        return response
            .status(400)
            .json({ message: "Algo de errado aconteceu.", error });
    }
};

const update = async (request: Request, response: Response) => {
    const { name, office, avatar } = request.body;
    const { id } = request.params;
    try {
        const teacher = await prismaInstance.teacher.update({
            where: { id },
            data: {
                name,
                office,
                avatar,
            },
        });

        return response
            .status(200)
            .json({ teacher, message: "Trilha atualizada com sucesso" });
    } catch (error) {
        return response
            .status(400)
            .json({ message: "Algo de errado aconteceu.", error });
    }
};

const deleteById = async (request: Request, response: Response) => {
    const { id } = request.params;
    try {
        const teacher = await prismaInstance.teacher.delete({
            where: { id },
        });

        return response
            .status(200)
            .json({ teacher, message: "Trilha deletada com sucesso" });
    } catch (error) {
        return response
            .status(400)
            .json({ message: "Algo de errado aconteceu.", error });
    }
};
export default { create, getAll, getUserById, update, deleteById };
