import { Router } from "express";
import NoteController from "./controller/NoteController";
import UserController from "./controller/UserController";

const router = Router();

router.post("/user", UserController.create);
router.post("/user-profile", UserController.profile);

router.get("/user/:id", UserController.getUserById);

router.get("/note/:email", NoteController.getNotesByUser);
router.post("/note/:email", NoteController.create);

export { router };
