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
    const allFoods = await foodModel.find();
    res.status(200).json({ message: "All Foods", data: allFoods });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
};

export const getAppetizers: RequestHandler = async (req, res) => {
  try {
    const { foodId } = req.params;
    const allFoods = await foodModel.find();
    const appetizers = allFoods.filter(
      (food) => String(food.category) == String(foodId)
    );
    console.log("app", allFoods);
    res.status(200).json({ message: "App", data: appetizers });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
};

export const fixFood: RequestHandler = async (req, res) => {
  try {
    const { foodId } = req.params;
    const categoryData = req.body;
    const updateCategory = await foodModel.updateOne(
      { _id: "67bfe5bf0063d4a717497470" },
      {
        $set: {
          image:
            "https://res.cloudinary.com/ds6kxgjh0/image/upload/v1739950347/q7dt7vhlctno2wmebov4.png",
        },
      }
    );
    res
      .status(201)
      .json({ message: "Successfully fixed Food", updateCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in fixFood", error });
  }
};
