import express from "express";
import {
  createFoodCategory,
  deleteFoodCategories,
  fixFoodCategories,
  getFoodCategories,
} from "../controllers/food-category.controller";

const categoryRoute = express.Router();

categoryRoute
  .post("/", createFoodCategory)
  .get("/", getFoodCategories)
  .put("/:_id", fixFoodCategories)
  .delete("/:_id", deleteFoodCategories);

export default categoryRoute;
