import { RequestHandler } from "express";
import userModel from "../../models/user.model";
import { compareSync } from "bcryptjs";

export const signIn: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      res.status(401).json({ message: "Email oruulna uu", error: true });
      return;
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "Unregistered user!", error: true });
      return;
    }

    const isCorrect = compareSync(password, user.password);

    if (!isCorrect) {
      res.status(401).json({ message: "Password is wrong!", error: true });
      return;
    }

    res.status(200).json({ message: "Successfully logged in", data: user });
  } catch (error) {
    res.status(500).json({ message: "Error in getSignInUser", error });
  }
};
