import { RequestHandler } from "express";
import foodOrderModel from "../models/food-order.model";

export const createFoodOrder: RequestHandler = async (req, res) => {
  try {
    const foodOrderData = req.body;
    await foodOrderModel.create(foodOrderData);
    res.status(201).json({ message: "Successfully created Food-Order" });
  } catch (error) {
    res.status(500).json({ message: "Error in createFoodOrder" });
  }
};

export const getFoodOrder: RequestHandler = async (req, res) => {
  try {
    const foodOrders = await foodOrderModel.find();
    res
      .status(200)
      .json({ message: "Successfully get Food-Order", data: foodOrders });
  } catch (error) {
    res.status(500).json({ message: "Error in getFoodOrder" });
  }
};
