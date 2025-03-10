import mongoose, { Schema } from "mongoose";

type FoodOrderItemSchemaType = {
  food: Schema.Types.ObjectId;
  quantity: number;
};

const FoodOrderItemSchema: Schema = new Schema({
  food: { type: Schema.Types.ObjectId, rel: "foods", required: true },
  quantity: { type: Number, required: true },
});

export default mongoose.model<FoodOrderItemSchemaType>(
  "food_order_item",
  FoodOrderItemSchema
);
