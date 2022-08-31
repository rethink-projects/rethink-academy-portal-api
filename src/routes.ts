import { Router } from "express";
import CourseController from "./controller/CourseController";
import TrailController from "./controller/TrailController";
import UserController from "./controller/UserController";
import LessonController from "./controller/LessonController";
import ModuleController from "./controller/ModuleController";

const router = Router();

router.get("/user", UserController.getAll);
router.post("/user", UserController.create);
router.post("/user-profile", UserController.profile);

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
