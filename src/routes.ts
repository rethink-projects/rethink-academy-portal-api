<<<<<<< HEAD
import { response, Router } from "express";
import * as yup from "yup";
import { prismaInstance } from "../database/prismaClient";
import CoursesController from "./controller/CoursesController";
=======
import { Router } from "express";
import CourseController from "./controller/CourseController";
>>>>>>> feature/Courses-branch-extend
import TrailController from "./controller/TrailController";
import UserController from "./controller/UserController";
import LessonController from "./controller/LessonController";
import ModuleController from "./controller/ModuleController";

const router = Router();

router.get("/user", UserController.getAll);
router.post("/user", UserController.create);
router.post("/user-profile", UserController.profile);
router.get("/user/watched/:email", UserController.getWatched);

router.post("/course", CoursesController.create);
router.get("/course", CoursesController.getAll);
router.get("/course/:id", CoursesController.getCourseById);
router.put("/course/:id", CoursesController.update);
router.get("/trail/:id", TrailController.getTrailById);
// router.delete("/course/:id", CoursesController.update);

router.get("/trail", async (request, response) => {
  try {
    const trails = await prismaInstance.trail.findMany();

    return response.json({ trails });
  } catch (error) {
    return response.json({ message: "Algo de errado aconteceu.", error });
  }
});

router.get("/user/:email", UserController.getUserByEmail);
router.post("/user/watched/:email", UserController.createWatched);
router.get("/user/watched/:email", UserController.getWatched);

router.post("/trail", TrailController.create);
router.get("/trail", TrailController.getAll);
// router.get("/trail/:id", TrailController.getTrailById);
router.get("/trail/:id", TrailController.getTrailById);
router.put("/trail/:id", TrailController.update);
router.delete("/trail/:id", TrailController.deleteById);

router.get("/course", CourseController.getAllByCourseId);
router.get("/course/:id", CourseController.getById);
router.post("/course", CourseController.create);
router.delete("/course/:id", CourseController.deleteById);
router.put("/course/:id", CourseController.update);

router.get("/lesson", LessonController.getAll);
router.get("/lesson/:id", LessonController.getById);
router.post("/lesson", LessonController.create);
router.delete("/lesson/:id", LessonController.deleteById);
router.put("/lesson/:id", LessonController.update);

router.post("/module", ModuleController.create);
router.get("/module", ModuleController.getAll);
router.get("/module/:id", ModuleController.getById);
router.put("/module/:id", ModuleController.update);
router.delete("/module/:id", ModuleController.deleteById);

export { router };

// router.get("/ana", (request, response) => {
//   request.teste = "ana e gabriel";
//   return response.json({ name: request.teste });
// });
// const schema = yup.object().shape({
//   name: yup.string().min(6).max(10).required(),
//   email: yup
//     .string()
//     .email("Email invalido!!!")
//     .required("Email obrigatório!!!"),
// });

// router.post("/ana", async (request, response) => {
//   try {
//     await schema.validate(request.body);

//     const { name, email } = request.body;

//     return response.json(email);
//   } catch (error) {
//     return response.json({ error: error.message });
//   }
// });
