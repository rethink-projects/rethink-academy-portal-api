import { Router } from "express";
import UserController from "./controller/UserController";
import StickerNotesController from "./controller/StickerNotes";

const router = Router();

router.post("/user", UserController.create);
router.post("/user-profile", UserController.profile);

router.get("/user/:id", UserController.getUserById);

router.get("/stickernotes/:email", StickerNotesController.getStickerNotesByUserEmail);
router.post("/stickernotes/", StickerNotesController.createstickerNotes);
router.delete("/stickernotes/:id", StickerNotesController.removeStickerNotes);
router.put("/stickernotes/:id", StickerNotesController.updateStickerNotes);
export { router };
