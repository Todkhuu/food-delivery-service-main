import { Router } from "express";
import { getSignInUser, signInUser } from "../controllers/user.controller";

const userRoute = Router();

userRoute.get("/refresh", getSignInUser).post("/sign_in", signInUser);

export default userRoute;
