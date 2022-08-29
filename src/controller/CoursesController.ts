import { Request, Response } from "express";
import { object } from "yup";
import { prismaInstance } from "../../database/prismaClient";

const create = async (request: Request, response: Response) => {
  try {
    const {
      name,
      description,
      level,
      workload,
      learning,
      skills,
      trail,
      trailId,
      teacher,
      teacherId,
      modules,
    } = request.body;

    const course = await prismaInstance.course.create({
      data: {
        name,
        description,
        level,
        workload,
        learning,
        skills,
        trail,
        trailId,
        teacher,
        teacherId,
        modules,
      },
    });
    return response.json(course);
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error: error.message });
  }
};

const update = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const {
      name,
      description,
      level,
      workload,
      learning,
      skills,
      trail,
      trailId,
      teacher,
      teacherId,
      modules,
    } = request.body;

    const course = await prismaInstance.course.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        level,
        workload,
        learning,
        skills,
        trail,
        trailId,
        teacher,
        teacherId,
        modules,
      },
    });

    return response.json(course);
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Algo de errado aconteceu.", error: error.message });
  }
};

const getAll = async (request: Request, response: Response) => {
  try {
    const courses = await prismaInstance.course.findMany({
      include: {
        teacher: {
          include: {
            profile: true,
          },
        },
        trail: true,
      },
    });

    return response.json({ courses });
  } catch (error) {
    return response.json({ message: "Algo de errado aconteceu.", error });
  }
};

const getCourseById = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const courses = await prismaInstance.course.findFirst({
      where: {
        id,
      },
      include: {
        teacher: {
          include: {
            profile: true,
          },
        },
        trail: true,
      },
    });

    return response.json(courses);
  } catch (error) {
    return response.json({ message: "Algo de errado aconteceu.", error });
  }
};

const deleteCourseById = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const courses = await prismaInstance.course.delete({
      where: {
        id,
      },
    });
    // const courses = await prismaInstance.course.findMany({
    //   where: {
    //     id,
    //   },
    //   include: {
    //     teacher: true,
    //     trail: true,
    //   },
    // });

    return response.json({ courses });
  } catch (error) {
    return response.json({
      message: "Algo de errado aconteceu.",
      error: error.message,
    });
  }
};

export default { create, getAll, update, getCourseById, deleteCourseById };
