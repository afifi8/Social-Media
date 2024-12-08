import { Request, Response } from "express";
import User from "../../models/user.model";
import mongoose from "mongoose";

const followUser = async (req: Request, res: Response) => {
  const userId = (req as any).user?.id;
  const followId = req.params.id;

  if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: "Invalid user ID" });
    return;
  }

  if (!followId || !mongoose.Types.ObjectId.isValid(followId)) {
    res.status(400).json({ message: "Invalid follow ID" });
    return;
  }

  try {
    const user = await User.findById(userId).populate(
      "followings",
      "fullName avatar email _id mainJob"
    );

    const userToFollow = await User.findById(followId);

    if (!user || !userToFollow) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const isAlreadyFollowing = user.followings.some(
      (f: mongoose.Types.ObjectId) => f.equals(followId)
    );

    if (isAlreadyFollowing) {
      res.status(400).json({ message: "Already following this user" });
      return;
    }

    user.followings.push(new mongoose.Types.ObjectId(followId));
    userToFollow.followers.push(new mongoose.Types.ObjectId(userId));

    await user.save();
    await userToFollow.save();

    const newUser = await User.findById(user._id)
      .populate("followings", "fullName avatar email _id mainJob")
      .populate("followers", "fullName avatar email _id mainJob")

      .lean();

    res.status(200).json({
      message: "User followed successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to follow user", error });
  }
};

export default followUser;
