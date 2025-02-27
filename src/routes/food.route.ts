import express from "express";
import { createFood } from "../controllers/food.controller";

const foodRoute = express.Router();

foodRoute.post("/", createFood);

export default foodRoute;
