import { RequestHandler } from "express";
import userModel from "../models/user.model";

export const getSignInUser: RequestHandler = async (req, res) => {
  try {
    const signUser = await userModel.find();
    res.status(200).json({ message: "Successfully get User", data: signUser });
  } catch (error) {
    res.status(500).json({ message: "Error in getSignInUser" });
  }
};

export const signInUser: RequestHandler = async (req, res) => {
  try {
    const signUserData = req.body;
    const signUser = await userModel.create(signUserData);
    res.status(201).json({ message: "Successfully created User" });
  } catch (error) {
    res.status(500).json({ message: "Error in signInUser" });
  }
};
