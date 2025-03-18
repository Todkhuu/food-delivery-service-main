import { Router } from "express";
import { signUp } from "../controllers/auth/signUp.controller";
import { signIn } from "../controllers/auth/signIn.controller";
import { refresh } from "../controllers/auth/refresh.controller";

const userRoute = Router();

userRoute.post("/signup", signUp);
userRoute.post("/signin", signIn);
userRoute.get("/refresh", refresh);

export default userRoute;
