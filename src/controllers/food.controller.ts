import { RequestHandler } from "express";
import foodModel from "../models/food.model";

export const createFood: RequestHandler = async (req, res) => {
  try {
    const categoryData = req.body;
    const newCategory = await foodModel.create(categoryData);
    res.status(201).json({ message: "Successfully created Food" });
  } catch (error) {
    res.status(500).json({ message: "Error in createFood", error });
  }
};

export const fixFood: RequestHandler = async (req, res) => {
  try {
    const { foodId } = req.params;
    const categoryData = req.body;
    await foodModel.create(categoryData);
    res.status(201).json({ message: "Successfully fixed Food" });
  } catch (error) {
    res.status(500).json({ message: "Error in fixFood", error });
  }
};
