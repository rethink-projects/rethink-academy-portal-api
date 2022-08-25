import { Router, Request, Response } from "express";
import EvaluateController from "./controller/EvaluateController";
import ContractInfoController from "./controller/ContractInfoController";
import NoteController from "./controller/NoteController";
import UserController from "./controller/UserController";

const router = Router();

router.post("/user", UserController.create);
router.post("/user-profile", UserController.profile);

router.get("/user/:id", UserController.getUserById);

router.get("/note/:email", NoteController.getNotesByUser);
router.post("/note", NoteController.create);
router.post("/note/:id", NoteController.update);
router.delete("/note/:id", NoteController.remove);

router.get("/evaluate/:month", EvaluateController.getEvaluates);
router.post("/evaluate", EvaluateController.create);
router.post("/evaluate/:id", EvaluateController.update);
router.delete("/evaluate/:id", EvaluateController.remove);

router.post("/info", ContractInfoController.create);
router.get("/info/:email", ContractInfoController.getInfoByUser);
router.post("/info/:email", ContractInfoController.updateInfo);

export { router };
