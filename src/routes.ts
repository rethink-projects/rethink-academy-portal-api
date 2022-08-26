import { Router } from "express";
import UserController from "./controller/UserController";

const router = Router();
router.get("/user/:email", UserController.getUserByEmail);

router.get("/user", UserController.getAll);
router.post("/user", UserController.create);
router.post("/user/:email", UserController.update);
router.post("/user-profile", UserController.profile);

export { router };
