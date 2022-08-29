import { response, Router } from "express";
import * as yup from "yup";
import { prismaInstance } from "../database/prismaClient";
import CoursesController from "./controller/CoursesController";
import TrailController from "./controller/TrailController";
import UserController from "./controller/UserController";

const router = Router();
router.get("/user/:email", UserController.getUserByEmail);

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
