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
      res.status(401).json({ message: "Please provide an email" });
      return;
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(401).json({ message: "User not found" });
      return;
    }

    const token = jwt.sign({ id: user._id }, jwtSecret!, { expiresIn: "1h" });

    await sendEmail(email, token);

    res.status(200).json({ message: "Email sent successfully", data: user });
  } catch (error) {
    res.status(500).json({ message: "Error sending email", error });
  }
};
