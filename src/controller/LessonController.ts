import { Request, Response } from "express";
import { prismaInstance } from "../../database/prismaClient";

const create = async (request: Request, response: Response) => {
    const { name, description, embedUrl, order, module } = request.body;
    try {
        const lesson = await prismaInstance.lesson.create({
            data: {
                name,
                embedUrl,
                order,
                description,
                module,
            },
        });
        return response
            .status(201)
            .json({ lesson, message: "Aula criada com sucesso" });
    } catch (error) {
        return response
            .status(400)
            .json({ message: "Algo de errado aconteceu.", error });
    }
};

const getAll = async (request: Request, response: Response) => {
    try {
        const lessons = await prismaInstance.lesson.findMany();

        return response.status(200).json({ lessons });
    } catch (error) {
        return response
            .status(400)
            .json({ message: "Algo de errado aconteceu.", error });
    }
};

const getById = async (request: Request, response: Response) => {
    const { id } = request.params;
    try {
        const lesson = await prismaInstance.lesson.findFirst(
            {
                where: {
                    id,
                }
            }
        );

        return response.status(200).json({ lesson });
    } catch (error) {
        return response
            .status(400)
            .json({ message: "Algo de errado aconteceu.", error });
    }
};

const update = async (request: Request, response: Response) => {
    const { name, description, embedUrl, order, module } = request.body;
    const { id } = request.params;
    try {
        const lesson = await prismaInstance.lesson.update({
            where: { id },
            data: {
                name,
                embedUrl,
                order,
                description,
                module,
            },
        });
        return response
            .status(200)
            .json({ lesson, message: "Aula atualizada com sucesso" });
    } catch (error) {
        return response
            .status(400)
            .json({ message: "Algo de errado aconteceu.", error });
    }
};

const deleteById = async (request: Request, response: Response) => {
    const { id } = request.params;
    try {
        const lesson = await prismaInstance.lesson.delete({
            where: { id },
        });

        return response
            .status(200)
            .json({ lesson, message: "Aula deletada com sucesso" });
    } catch (error) {
        return response
            .status(400)
            .json({ message: "Algo de errado aconteceu.", error });
    }
};
export default { create, getAll, getById, update, deleteById };