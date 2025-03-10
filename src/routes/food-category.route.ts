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
  .put("/", fixFoodCategories)
  .delete("/", deleteFoodCategories);

export default categoryRoute;
