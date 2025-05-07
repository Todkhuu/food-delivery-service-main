import { RequestHandler } from "express";
import userModel from "../../models/user.model";
import jwt, { JwtPayload } from "jsonwebtoken";
import { configDotenv } from "dotenv";
import { hashSync } from "bcryptjs";

configDotenv();

const jwtSecret = process.env.JWT_SECRET;

export const resetPassword: RequestHandler = async (req, res) => {
  try {
    const { password, token } = req.body;

    if (!token) {
      res.status(400).json({ message: "Token is missing" });
      return;
    }

    const decoded = jwt.verify(token, jwtSecret!) as JwtPayload;
    const id = decoded.id;

    const hashedPassword = hashSync(password, 10);

    const user = await userModel.findByIdAndUpdate(id, {
      password: hashedPassword,
    });

    res.status(200).json({
      message: "Your password has been successfully updated",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};
