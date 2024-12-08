import { Request, Response } from "express";
import Post from "../../models/post.model";
import User from "../../models/user.model";

export const likeToPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = (req as any).user?.id; // Assuming `authMiddleware` attaches the user to the request

    // Fetch the post
    const post = await Post.findById(id);
    if (!post) {
      res.status(404).json({ error: "Post not found" });
      return;
    }

    // Check if the user has already liked the post
    if (post.likes.includes(userId)) {
      res.status(400).json({ error: "Post already liked" });
      return;
    }

    // Fetch the post creator
    const userCreatorPost = await User.findById(post.userId);
    if (!userCreatorPost) {
      res.status(404).json({ error: "Post creator not found" });
      return;
    }

    // Add the user's like
    post.likes.push(userId);
    userCreatorPost.numberOfLikes = (userCreatorPost.numberOfLikes || 0) + 1;

    // Save changes
    await Promise.all([post.save(), userCreatorPost.save()]);

    res.status(200).json({ message: "Post liked successfully", post });
  } catch (error) {
    console.error("Error liking post:", error);
    res.status(500).json({ error: "Failed to like post" });
  }
};
