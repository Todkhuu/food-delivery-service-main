import { RequestHandler } from "express";
import userModel from "../../models/user.model";
import jwt from "jsonwebtoken";
import { sendEmail } from "../../util/send-eamil";
import { configDotenv } from "dotenv";

configDotenv();

const jwtSecret = process.env.JWT_SECRET;

export const forgetPassword: RequestHandler = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(401).json({ message: "Email oruulna uu" });
      return;
    }

    const user = await userModel.findOne({ email });
    console.log("user", user);

    if (!user) {
      res.status(401).json({ message: "Burtgeltei hereglegch bhgu" });
      return;
    }

    console.log("jwt-secret", jwtSecret);

    const token = jwt.sign({ id: user._id }, jwtSecret!, { expiresIn: "1h" });
    // console.log("token", token);

    await sendEmail(email, token);

    res.status(200).json({ message: "amjilttai", data: user });
  } catch (error) {
    res.status(500).json({ message: "aldaa garlaa", error });
  }
};
