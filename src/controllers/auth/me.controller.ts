import { Request, Response } from "express";
import userModel from "../../models/user.model";

export const me = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await userModel.findById(userId).select("-password");

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ message: "User fetched", user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
