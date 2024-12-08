import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { addComment } from "../controllers/comments/addComment";

const router = express.Router();



router.use(authMiddleware);

router.post("/addComment", addComment);
router.post("/");

export default router;
