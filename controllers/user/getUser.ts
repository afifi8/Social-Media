import { Request, Response } from "express";
import User from "../../models/user.model";

const getUser = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId)
      .populate("followers", "fullName avatar _id")
      .populate("followings", "fullName avatar _id")
      // .populate("posts");

    if (!user) {
       res.status(404).json({ message: "User not found" });
       return;
    }
    res.status(200).json({ message: "User fetched successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user", error });
  }
};

export default getUser;
