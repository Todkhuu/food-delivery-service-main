import { Router } from "express";
import { signUp } from "../controllers/auth/signUp.controller";
import { signIn } from "../controllers/auth/signIn.controller";

const userRoute = Router();

userRoute.post("/signup", signUp);
userRoute.post("/signin", signIn);

export default userRoute;
