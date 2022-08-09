import { Router, Request, Response } from "express";
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

export { router };
