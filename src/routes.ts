import { Router } from "express";
import TasksController from "./controller/TasksController";
import BadgesController from "./controller/BadgesController";
import BucketController from "./controller/BucketController";
import UserController from "./controller/UserController";

const router = Router();
router.get("/user/:email", UserController.getUserByEmail);

router.get("/user", UserController.getAll);
router.post("/user", UserController.create);
router.post("/user/:email", UserController.update);

router.get("/bucket", BucketController.getUserBucket);
router.get("/bucket/:title", BucketController.getOneBucket);
router.post("/bucket", BucketController.upsert);

router.post("/badge", BadgesController.giveBadge);
router.get("/badge/:email", BadgesController.getUserBadges);

router.get("/tasks/:email", TasksController.getTaskByUserEmail);
router.post("/tasks", TasksController.createTask);
router.delete("/tasks/:id", TasksController.removeTask);
router.put("/tasks/:id", TasksController.updateTask);
router.get("/tasks/tag/:email", TasksController.getGroupTaskByTag);
router.post("/tasks/:email", TasksController.getTaskByUserEmail);
router.get("/tasks/day/:email", TasksController.getRecordOfDay);
router.get("/tasks/hours/:email", TasksController.getHoursLastDay);

export { router };
