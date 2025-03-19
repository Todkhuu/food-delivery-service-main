import { Router } from "express";
import { signUp } from "../controllers/auth/signUp.controller";
import { signIn } from "../controllers/auth/signIn.controller";
import { refresh } from "../controllers/auth/refresh.controller";
import { forgetPassword } from "../controllers/auth/forget-password.controller";
import { resetPassword } from "../controllers/auth/reset-password.controller";

const userRoute = Router();

userRoute.post("/signup", signUp);
userRoute.post("/signin", signIn);
userRoute.get("/refresh", refresh);
userRoute.post("/reset-password-request", forgetPassword);
userRoute.post("/reset-password", resetPassword);

export default userRoute;
