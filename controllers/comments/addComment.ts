import { Request, Response } from "express";
import Post from "../../models/post.model";
import User from "../../models/user.model";
import Comment from "../../models/commenst.model";

export const addComment = async (req: Request, res: Response) => {
  try {
    const { content, postId } = req.body;
    const userId = (req as any).user?.id;

    if (!userId || !postId || !content) {
      res.status(400).json({
        error: "User ID, Post ID, and content are required",
      });
      return;
    }

    const [user, post] = await Promise.all([
      User.findById(userId).select("fullName avatar email _id mainJob"),
      Post.findById(postId),
    ]);

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    if (!post) {
      res.status(404).json({ error: "Post not found" });
      return;
    }

    const newComment = new Comment({
      content,
      userId,
    });

    await newComment.save();

    post.comments.push(newComment._id as any);
    await post.save();

    const populatedComment = await newComment.populate(
      "userId",
      "fullName avatar email _id mainJob"
    );

    res.status(201).json({
      message: "Comment added successfully",
      comment: populatedComment,
    });
    return;
  } catch (error) {
    console.error("Error adding comment:", error);

     res.status(500).json({
      error: "Failed to add comment",
      details: error instanceof Error ? error.message : error,
    });
    return;
  }
};
