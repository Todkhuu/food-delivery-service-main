import { Router } from "express";
import {
  createFoodOrder,
  getFoodOrder,
} from "../controllers/food-order.controller";

const foodOrderRoute = Router();

foodOrderRoute.post("", createFoodOrder).get("", getFoodOrder);

export default foodOrderRoute;
