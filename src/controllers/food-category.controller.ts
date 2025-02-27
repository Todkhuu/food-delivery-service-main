import { RequestHandler } from "express";
import foodCategoryModel from "../models/food-category.model";

export const createFoodCategory: RequestHandler = async (req, res) => {
  try {
    const categoryData = req.body;
    const newCategory = await foodCategoryModel.create(categoryData);
    res
      .status(201)
      .json({ message: "Successfully created category", newCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in createFoodCategory", error });
  }
};

export const getFoodCategories: RequestHandler = async (req, res) => {
  try {
    const allCategory = await foodCategoryModel.find();
    res.status(200).json({ message: "All FoodCategory", data: allCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in getFoodCategory", error });
  }
};

export const fixFoodCategories: RequestHandler = async (req, res) => {
  try {
    const categoryData = req.body;
    const updateCategory = await foodCategoryModel.updateOne(categoryData);
    res
      .status(201)
      .json({ message: "Successfully fixed FoodCategory", updateCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in fixFoodCategory", error });
  }
};

export const deleteFoodCategories: RequestHandler = async (req, res) => {
  try {
    const categoryData = req.body;
    const deleteCategory = await foodCategoryModel.deleteOne(categoryData);
    res.status(200).json({ message: "Successfully deleted FoodCategory" });
  } catch (error) {
    res.status(500).json({ message: "Error in deleteFoodCategory", error });
  }
};
