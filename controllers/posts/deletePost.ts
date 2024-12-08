import { Request, Response } from "express";
import Post from "../../models/post.model";
import User from "../../models/user.model";

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = (req as any).user.id;

    // Fetch user and post concurrently
    const [user, post] = await Promise.all([
      User.findById(userId),
      Post.findById(id),
    ]);

    // Check if user exists
    if (!user) {
      res.status(404).json({ message: "User not found!" });
      return;
    }

    // Check if post exists
    if (!post) {
      res.status(404).json({ message: "Post not found!" });
      return;
    }

    // Check if the post belongs to the current user
    if (post.userId.toString() !== userId) {
      res
        .status(403)
        .json({ message: "You don't have permission to delete this post." });
      return;
    }

    // Delete the post
    await Post.findByIdAndDelete(id);

    res.status(200).json({ message: "Post deleted successfully." });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "Failed to delete post." });
  }
};
