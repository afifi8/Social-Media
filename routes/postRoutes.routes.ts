import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";

import UploadImagePost from "../middlewares/UploadImapePost";
import { getPost } from "../controllers/posts/getPost";
import { createPost } from "../controllers/posts/createPost";
import { deletePost } from "../controllers/posts/deletePost";
import { updatePost } from "../controllers/posts/updatePost";

import { likeToPost } from "../controllers/posts/likeToPost";
import { unLikedPost } from "../controllers/posts/unLikedPost";
import addImagePost from "../controllers/posts/addImagePost";

const router = express.Router();
router.use(authMiddleware);

const ifIsExistUploadImage = UploadImagePost();

router.get("/getPost", getPost);
router.post(
  "/addImagePost",
  ifIsExistUploadImage.single("PostImage"),
  addImagePost
);





router.post(
  "/createPost",
  ifIsExistUploadImage.single("PostImage"),
  createPost
);
router.delete("/deletePost/:id", deletePost);

// router.patch("/updatePost/:id", updatePost);

router.patch("/likeToPost/:id", likeToPost);
router.patch("/unLikedPost/:id", unLikedPost);

export default router;
