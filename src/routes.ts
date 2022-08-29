import { Router } from "express";
import TasksController from "./controller/TasksController";
import UserController from "./controller/UserController";

const router = Router();

router.post("/user", UserController.create);
router.post("/user-profile", UserController.profile);

router.get("/user/:id", UserController.getUserById);

router.get("/tasks/:email", TasksController.getTaskByUserEmail);
router.post("/tasks", TasksController.createTask);
router.delete("/tasks/:id", TasksController.removeTask);
router.patch("/tasks/:id", TasksController.updateTask);

export { router };
