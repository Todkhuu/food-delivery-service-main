import { RequestHandler } from "express";
import foodCategoryModel from "../models/food-category.model";
import foodModel from "../models/food.model";

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

    const categoryWithFoodCount = await Promise.all(
      allCategory.map(async (category) => {
        const foods = await foodModel.find({ category: category._id });
        return {
          _id: category._id,
          categoryName: category.categoryName,
          count: foods.length,
        };
      })
    );
    res.status(200).json({
      message: "All FoodCategory",
      data: categoryWithFoodCount,
    });
  } catch (error) {
    res.status(500).json({ message: "Error in getFoodCategory", error });
  }
};

export const fixFoodCategories: RequestHandler = async (req, res) => {
  try {
    const { _id } = req.params;
    const categoryData = req.body;
    console.log(_id, categoryData);
    const updateCategory = await foodCategoryModel.updateOne(
      { _id: _id },
      categoryData
    );
    res
      .status(201)
      .json({ message: "Successfully fixed FoodCategory", updateCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in fixFoodCategory", error });
  }
};

export const deleteFoodCategories: RequestHandler = async (req, res) => {
  try {
    const { _id } = req.params;
    const deleteCategory = await foodCategoryModel.deleteOne({ _id });
    res.status(200).json({ message: "Successfully deleted FoodCategory" });
  } catch (error) {
    res.status(500).json({ message: "Error in deleteFoodCategory", error });
  }
};
