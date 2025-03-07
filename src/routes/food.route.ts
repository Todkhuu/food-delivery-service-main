import express from "express";
import {
  createFood,
  fixFood,
  getAppetizers,
  getFood,
} from "../controllers/food.controller";

const foodRoute = express.Router();

foodRoute
  .post("/", createFood)
  .get("/", getFood)
  .put("/", fixFood)
  .get("/:foodId", getAppetizers);

export default foodRoute;
