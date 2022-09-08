import { Router } from "express";
import BadgesController from "./controller/BadgesController";
import BucketController from "./controller/BucketController";
import UserController from "./controller/UserController";

const router = Router();
router.get("/user/:email", UserController.getUserByEmail);

router.get("/user", UserController.getAll);
router.post("/user", UserController.create);
router.post("/user/:email", UserController.update);

router.get("/bucket", BucketController.getUserBucket);
router.get("/bucket/:title", BucketController.getOneBucket);
router.post("/bucket", BucketController.upsert);

router.post("/badge", BadgesController.giveBadge);
router.get("/badge/:email", BadgesController.getUserBadges);

export { router };
