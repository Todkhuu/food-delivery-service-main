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

export const getFood: RequestHandler = async (req, res) => {
  try {
    // const { foodId } = req.params;
    const allFoods = await foodModel.find();
    res.status(200).json({ message: "All Foods", data: allFoods });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
};

export const getAppetizers: RequestHandler = async (req, res) => {
  try {
    const { foodId } = req.params;
    const allFoods = await foodModel.find({ category: foodId });
    res.status(200).json({ message: "App", data: allFoods });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
};

export const fixFood: RequestHandler = async (req, res) => {
  try {
    const { foodId } = req.params;
    const categoryData = req.body;
    const updateCategory = await foodModel.updateOne(
      { _id: foodId },
      categoryData
    );

    res
      .status(201)
      .json({ message: "Successfully fixed Food", updateCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in fixFood", error });
  }
};
