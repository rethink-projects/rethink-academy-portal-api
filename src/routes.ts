import { Router } from "express";
import TrailController from "./controller/TrailController";
import UserController from "./controller/UserController";

const router = Router();

router.post("/user", UserController.create);
router.post("/user-profile", UserController.profile);

router.get("/user/:id", UserController.getUserById);

router.post("/trail", TrailController.create);
router.get("/trail", TrailController.getAll);
router.post("/trail/:id", TrailController.update);
router.delete("/trail/:id", TrailController.deleteById);

export { router };
