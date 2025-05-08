import { Router } from "express";
import { signUp } from "../controllers/auth/signUp.controller";
import { signIn } from "../controllers/auth/signIn.controller";
import { forgetPassword } from "../controllers/auth/forget-password.controller";
import { resetPassword } from "../controllers/auth/reset-password.controller";
import { me } from "../controllers/auth/me.controller";

const userRoute = Router();

userRoute.post("/signup", signUp);
userRoute.post("/signin", signIn);
userRoute.get("/me", me);
userRoute.post("/reset-password-request", forgetPassword);
userRoute.post("/reset-password", resetPassword);

export default userRoute;
