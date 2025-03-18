import { RequestHandler } from "express";
import userModel from "../../models/user.model";

export const refresh: RequestHandler = async (req, res) => {
  try {
    const users = await userModel.find();
    console.log("users", users);
    res.status(200).json({ message: "Buh hereglegchid", data: users });
  } catch (error) {
    res.status(500).json({ message: "Error in refresh" });
  }
};
