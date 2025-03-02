import express from "express";
import { createFood, fixFood } from "../controllers/food.controller";

const foodRoute = express.Router();

foodRoute.post("/", createFood).put("/", fixFood);

export default foodRoute;
