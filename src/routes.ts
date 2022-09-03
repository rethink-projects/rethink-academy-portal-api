import { Router } from "express";
import TasksController from "./controller/TasksController";
import UserController from "./controller/UserController";

const router = Router();
router.get("/user/:email", UserController.getUserByEmail);

router.get("/user", UserController.getAll);
router.post("/user", UserController.create);
router.post("/user-profile", UserController.profile);

router.get("/tasks/:email", TasksController.getTaskByUserEmail);
router.post("/tasks", TasksController.createTask);
router.delete("/tasks/:id", TasksController.removeTask);
router.put("/tasks/:id", TasksController.updateTask);
router.get("/tasks/tag/:email", TasksController.getGroupTaskByTag);
router.post("/tasks/:email", TasksController.getTaskByUserEmail);

export { router };
