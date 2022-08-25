import { Request, Response } from "express";
import { prismaInstance } from "../../database/prismaClient";

const create = async (request: Request, response: Response) => {
    const { name, description, level, workload, teacherId, learning, skills, trailId } = request.body;
    try {
        const course = await prismaInstance.course.create({
            data: {
                name,
                description,
                level,
                workload,
                teacherId,
                learning,
                skills,
                trailId,
            },
        });
        return response
            .status(201)
            .json({ course, message: "Curso criado com sucesso" });
    } catch (error) {
        return response
            .status(400)
            .json({ message: "Algo de errado aconteceu.", error });
    }
};

const getAllByCourseId = async (request: Request, response: Response) => {
    const { trailId } = request.params;
    try {
        const course = await prismaInstance.course.findMany({
            where: { trailId },
        });

        return response.status(200).json({ course });
    } catch (error) {
        return response
            .status(400)
            .json({ message: "Algo de errado aconteceu.", error });
    }
};

const getById = async (request: Request, response: Response) => {
    const { id } = request.params;
    try {
        const course = await prismaInstance.course.findFirst({
            where: { id },
            include: {
                lesson: true,
                teacher: true,
            },
        });

        return response.status(200).json({ course });
    } catch (error) {
        return response
            .status(400)
            .json({ message: "Algo de errado aconteceu.", error });
    }
};

const update = async (request: Request, response: Response) => {
    const { name, description, level, workload, teacher, learning, skills, trailId } = request.body;
    const { id } = request.params;
    try {
        const course = await prismaInstance.course.update({
            where: { id },
            data: {
                name,
                description,
                level,
                workload,
                teacher,
                learning,
                skills,
                trailId,
            },
        });
        return response
            .status(200)
            .json({ course, message: "Curso atualizado com sucesso" });
    } catch (error) {
        return response
            .status(400)
            .json({ message: "Algo de errado aconteceu.", error });
    }
};

const deleteById = async (request: Request, response: Response) => {
    const { id } = request.params;
    try {
        const course = await prismaInstance.course.delete({
            where: { id },
        });

        return response
            .status(200)
            .json({ course, message: "Curso deletado com sucesso" });
    } catch (error) {
        return response
            .status(400)
            .json({ message: "Algo de errado aconteceu.", error });
    }
};
export default { create, getAllByCourseId, update, deleteById, getById };