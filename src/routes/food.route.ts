import express from "express";
import {
  createFood,
  deleteFood,
  fixFood,
  getOneFood,
  getFoods,
} from "../controllers/food.controller";

const foodRoute = express.Router();

foodRoute.post("/", createFood);
foodRoute.get("/", getFoods);
foodRoute.put("/:foodId", fixFood);
foodRoute.get("/:foodId", getOneFood);
foodRoute.delete("/:foodId", deleteFood);

export default foodRoute;
