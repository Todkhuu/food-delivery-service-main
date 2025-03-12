import express from "express";
import {
  createFood,
  deleteFood,
  fixFood,
  getAppetizers,
  getFood,
} from "../controllers/food.controller";

const foodRoute = express.Router();

foodRoute.post("/", createFood);
foodRoute.get("/", getFood);
foodRoute.put("/:foodId", fixFood);
foodRoute.get("/:foodId", getAppetizers);
foodRoute.delete("/:foodId", deleteFood);

export default foodRoute;
