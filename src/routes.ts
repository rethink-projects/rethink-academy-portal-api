import { Router } from "express";
import UserController from "./controller/UserController";

const router = Router();
router.get("/user/:email", UserController.getUserByEmail);

router.post("/user", UserController.create);
router.post("/user-profile", UserController.profile);

export { router };
