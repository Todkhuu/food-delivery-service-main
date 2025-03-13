import { RequestHandler } from "express";
import foodModel from "../models/food.model";

export const createFood: RequestHandler = async (req, res) => {
  try {
    const categoryData = req.body;
    console.log("categoryData", categoryData);
    const newCategory = await foodModel.create(categoryData);
    res.status(201).json({ message: "Successfully created Food" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error in createFood", error });
  }
};

export const getFoods: RequestHandler = async (req, res) => {
  try {
    // const { categoryId } = req.params;
    // if (categoryId) {
    //   const allFoods = await foodModel.find({ category: categoryId });
    //   res.status(200).json({ message: "All Foods", data: allFoods });
    //   return;
    // }
    const allFoods = await foodModel.find().populate("category");
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

export const deleteFood: RequestHandler = async (req, res) => {
  try {
    const { foodId } = req.params;
    console.log(foodId);
    const deleteCategory = await foodModel.deleteOne({ _id: foodId });
    res
      .status(200)
      .json({ message: "Successfully deleted Food", deleteCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in deleteFood", error });
  }
};
