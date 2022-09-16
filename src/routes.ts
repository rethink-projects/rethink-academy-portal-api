import { Router, Request, Response } from "express";
import TasksController from "./controller/TasksController";
import BadgesController from "./controller/BadgesController";
import BucketController from "./controller/BucketController";
import EvaluateController from "./controller/EvaluateController";
import ContractInfoController from "./controller/ContractInfoController";
import NoteController from "./controller/NoteController";
import UserController from "./controller/UserController";
import GoalListController from "./controller/GoalListController";
import GoalController from "./controller/GoalController";
import CourseController from "./controller/CourseController";
import TrailController from "./controller/TrailController";
import LessonController from "./controller/LessonController";
import ModuleController from "./controller/ModuleController";
import CourseTimelineController from "./controller/CourseTimelineController";

const router = Router();

router.get("/bucket", BucketController.getUserBucket);
router.get("/bucket/:title", BucketController.getOneBucket);
router.post("/bucket", BucketController.upsert);
router.delete("/bucket/:id", BucketController.deleteFile);

router.get("/note/:email", NoteController.getNotesByUser);
router.post("/note", NoteController.create);
router.post("/note/:id", NoteController.update);
router.delete("/note/:id", NoteController.remove);

router.get(
  "/evaluate/chartData/:email",
  EvaluateController.getEvaluateChartData
);
router.get("/evaluate/:month", EvaluateController.getEvaluates);
router.post("/evaluate", EvaluateController.create);
router.patch("/evaluate/:id", EvaluateController.update);
router.delete("/evaluate/:id", EvaluateController.remove);

router.post("/info", ContractInfoController.create);
router.get("/info/:email", ContractInfoController.getInfoByUser);
router.post("/info/:email", ContractInfoController.updateInfo);

router.post("/badge", BadgesController.giveBadge);
router.get("/badge/:email", BadgesController.getUserBadges);

router.get("/goalList", GoalListController.getAll);
router.get("/goalList/:email", GoalListController.getByUserEmail);
router.post("/goalList/:email", GoalListController.create);
router.patch("/goalList/:id", GoalListController.update);
router.delete("/goalList/:id", GoalListController.remove);

router.post("/goal/:goalListId", GoalController.create);
router.patch("/goal/:id", GoalController.update);
router.delete("/goal/:id", GoalController.remove);

router.get("/tasks/:email", TasksController.getTaskByUserEmail);
router.post("/tasks", TasksController.createTask);
router.delete("/tasks/:id", TasksController.removeTask);
router.put("/tasks/:id", TasksController.updateTask);
router.get("/tasks/tag/:email", TasksController.getGroupTaskByTag);
router.post("/tasks/:email", TasksController.getTaskByUserEmail);
router.get("/tasks/day/:email", TasksController.getRecordOfDay);
router.get("/tasks/hours/:email", TasksController.getHoursLastDay);

router.get("/chart/:email", TasksController.getHoursForChart);
router.get("/user/:email", UserController.getUserByEmail);
router.get("/user", UserController.getAll);
router.post("/user", UserController.create);
router.post("/user/:email", UserController.update);
router.put("/user/:email", UserController.updateLessonsWatched);
// router.get("/teacher/:id", UserController.getProfileByUserId);
router.post("/user/watched/:email", UserController.createWatched);
router.get("/user/watched/:email", UserController.getWatched);
router.get("/user/watched/list/:email", UserController.getWatchedList);

router.post("/trail", TrailController.create);
router.get("/trail", TrailController.getAll);
router.put("/trail/:id", TrailController.update);
router.delete("/trail/:id", TrailController.deleteById);
router.get("/trail/course/:trailId", CourseController.getCoursesByTrailId);

router.get("/course", CourseController.getAll);
router.get("/course/:courseId/:email", CourseController.getCourse);
router.get("/course/:id", CourseController.getById);
router.get("/course/modules/:id", CourseController.getCourseModules);
router.post("/course", CourseController.create);
router.delete("/course/:id", CourseController.deleteById);
router.put("/course/:id", CourseController.update);

router.post("/module", ModuleController.create);
router.get("/module", ModuleController.getAll);
router.get("/module/:id", ModuleController.getById);
router.put("/module/:id", ModuleController.update);
router.delete("/module/:id", ModuleController.deleteById);

router.get("/stage/:trailId", CourseTimelineController.getByTrailId);
router.post("/stage/:id", CourseTimelineController.upsert);
router.delete("/stage/:id", CourseTimelineController.deleteById);

router.get(
  "/lesson/watched/:email/:idLesson",
  LessonController.getLessonsWatched
);
router.get("/lesson", LessonController.getAll);
router.get("/lesson/:id", LessonController.getById);
router.post("/lesson", LessonController.create);
router.delete("/lesson/:id", LessonController.deleteById);
router.put("/lesson/:id", LessonController.update);

router.get("/progress/:id", CourseController.getProgress);

export { router };
