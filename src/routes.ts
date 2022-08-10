import { Router } from "express";
import CourseController from "./controller/CourseController";
import TrailController from "./controller/TrailController";
import UserController from "./controller/UserController";
import TeacherController from "./controller/TeacherController";
import ClassController from "./controller/ClassController";

const router = Router();

router.post("/user", UserController.create);
router.post("/user-profile", UserController.profile);

router.get("/user/:id", UserController.getUserById);

router.post("/trail", TrailController.create);
router.get("/trail", TrailController.getAll);
router.post("/trail/:id", TrailController.update);
router.delete("/trail/:id", TrailController.deleteById);

router.get("/course", CourseController.getAll);
router.get("/course/:id", CourseController.getById);
router.post("/course", CourseController.create);
router.delete("/course/:id", CourseController.deleteById);
router.put("/course/:id", CourseController.update);

router.get("/class", ClassController.getAll);
router.get("/class/:id", ClassController.getById);
router.post("/class", ClassController.create);
router.delete("/class/:id", ClassController.deleteById);
router.put("/class/:id", ClassController.update);

router.post("/teacher", TeacherController.create);
router.get("/teacher", TeacherController.getAll);
router.get("/teacher/:id", TeacherController.getUserById);
router.put("/teacher/:id", TeacherController.update);
router.delete("/teacher/:id", TeacherController.deleteById);


export { router };
