import { RequestHandler } from "express";
import userModel from "../../models/user.model";
import { hashSync } from "bcryptjs";

export const signUp: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      res.status(401).json({ message: "Email bichne uu" });
      return;
    }

    const hashedPassword = hashSync(password, 10);

    const createUser = await userModel.create({
      email,
      password: hashedPassword,
    });

    res
      .status(200)
      .json({ message: "Hereglegch amjilttai burtgegdlee", data: createUser });
  } catch (error) {
    res.status(500).json({ message: "Error in getSignInUser" });
  }
};
