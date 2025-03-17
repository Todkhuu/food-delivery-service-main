import { Router } from "express";
import {
  createFoodOrder,
  getFoodOrder,
} from "../controllers/food-order.controller";
import { fixFood } from "../controllers/food.controller";

const foodOrderRoute = Router();

foodOrderRoute
  .post("", createFoodOrder)
  .get("", getFoodOrder)
  .put("/:id", fixFood);

export default foodOrderRoute;
