import { Request, Response } from "express";
import { prismaInstance } from "../../database/prismaClient";

const create = async (request: Request, response: Response) => {
    const { name, description, url, courseId, order, module } = request.body;
    try {
        const classes = await prismaInstance.classes.create({
            data: {
                name,
                url,
                courseId,
                order,
                description,
                module,
            },
        });
        return response
            .status(201)
            .json({ classes, message: "Trilha criada com sucesso" });
    } catch (error) {
        return response
            .status(400)
            .json({ message: "Algo de errado aconteceu.", error });
    }
};

const getAll = async (request: Request, response: Response) => {
    try {
        const classes = await prismaInstance.classes.findMany();

        return response.status(200).json({ classes });
    } catch (error) {
        return response
            .status(400)
            .json({ message: "Algo de errado aconteceu.", error });
    }
};

const getById = async (request: Request, response: Response) => {
    const { id: courseId } = request.params;
    try {
        const classes = await prismaInstance.classes.findFirst(
            {
                where: {
                    courseId: courseId,
                }
            }
        );

        return response.status(200).json({ classes });
    } catch (error) {
        return response
            .status(400)
            .json({ message: "Algo de errado aconteceu.", error });
    }
};

const update = async (request: Request, response: Response) => {
    const { name, description, url, courseId, order, module } = request.body;
    const { id } = request.params;
    try {
        const classes = await prismaInstance.classes.update({
            where: { id },
            data: {
                name,
                url,
                courseId,
                order,
                description,
                module,
            },
        });
        return response
            .status(200)
            .json({ classes, message: "Trilha atualizada com sucesso" });
    } catch (error) {
        return response
            .status(400)
            .json({ message: "Algo de errado aconteceu.", error });
    }
};

const deleteById = async (request: Request, response: Response) => {
    const { id } = request.params;
    try {
        const classes = await prismaInstance.classes.delete({
            where: { id },
        });

        return response
            .status(200)
            .json({ classes, message: "Trilha deletada com sucesso" });
    } catch (error) {
        return response
            .status(400)
            .json({ message: "Algo de errado aconteceu.", error });
    }
};
export default { create, getAll, getById, update, deleteById };