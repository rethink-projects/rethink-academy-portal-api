import { Router, Request, Response } from "express";
import BucketController from "./controller/BucketController";
import EvaluateController from "./controller/EvaluateController";
import ContractInfoController from "./controller/ContractInfoController";
import NoteController from "./controller/NoteController";
import UserController from "./controller/UserController";
import GoalListController from "./controller/GoalListController";
import GoalController from "./controller/GoalController";

const router = Router();
router.get("/user/:email", UserController.getUserByEmail);

router.get("/user", UserController.getAll);
router.post("/user", UserController.create);
router.post("/user/:email", UserController.update);

router.get("/bucket", BucketController.getBucket);
router.post("/bucket", BucketController.upsert);

router.get("/note/:email", NoteController.getNotesByUser);
router.post("/note", NoteController.create);
router.post("/note/:id", NoteController.update);
router.delete("/note/:id", NoteController.remove);

router.get("/evaluate/chartData", EvaluateController.getEvaluateChartData)
router.get("/evaluate/:month", EvaluateController.getEvaluates);
router.post("/evaluate", EvaluateController.create);
router.post("/evaluate/:id", EvaluateController.update);
router.delete("/evaluate/:id", EvaluateController.remove);

router.post("/info", ContractInfoController.create);
router.get("/info/:email", ContractInfoController.getInfoByUser);
router.post("/info/:email", ContractInfoController.updateInfo);

router.get("/goalList", GoalListController.getAll);
router.get("/goalList/:email", GoalListController.getByUserEmail);
router.post("/goalList/:email", GoalListController.create);
router.patch("/goalList/:id", GoalListController.update);
router.delete("/goalList/:id", GoalListController.remove);

router.post("/goal/:goalListId", GoalController.create);
router.patch("/goal/:id", GoalController.update);
router.delete("/goal/:id", GoalController.remove);

export { router };
