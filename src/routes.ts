import { Router } from "express";
import TasksController from "./controller/TasksController";
import BadgesController from "./controller/BadgesController";
import BucketController from "./controller/BucketController";
import CourseController from "./controller/CourseController";
import TrailController from "./controller/TrailController";
import UserController from "./controller/UserController";
import LessonController from "./controller/LessonController";
import ModuleController from "./controller/ModuleController";
import CourseTimelineController from "./controller/CourseTimelineController";

const router = Router();

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

router.get("/user", UserController.getAll);
router.post("/user", UserController.create);
router.post("/user/:email", UserController.update);
router.put("/user/:email", UserController.updateLessonsWatched);
router.get("/user/:email", UserController.getUserByEmail);
// router.get("/teacher/:id", UserController.getProfileByUserId);
router.post("/user/watched/:email", UserController.createWatched);
router.get("/user/watched/:email", UserController.getWatched);
router.get("/user/watched/list/:email", UserController.getWatchedList);
router.get(
  "/user/watched/course/:email/:trailId",
  UserController.getCoursesCompletedUser
);

router.post("/trail", TrailController.create);
router.get("/trail", TrailController.getAll);
router.put("/trail/:id", TrailController.update);
router.delete("/trail/:id", TrailController.deleteById);

router.get("/course", CourseController.getAll);
router.get("/course/:courseId/:email", CourseController.getCourse);

router.get("/trail/course/:trailId", CourseController.getAllByTrailId);
router.get("/course/:id", CourseController.getById);
router.get("/course/:id/modules", CourseController.getCourseModules);
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
