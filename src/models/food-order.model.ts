import mongoose, { Schema } from "mongoose";

type FoodOrderSchemaType = {
  user: Schema.Types.ObjectId;
  totalPrice: number;
  foodOrderItems: Schema.Types.ObjectId[];
  status: "PENDING" | "CANCELED" | "DELIVERED";
};

const FoodOrderSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, rel: "user", required: true },
    totalPrice: { type: Number, required: true },
    foodOrderItems: {
      type: [Schema.Types.ObjectId],
      rel: "food_order_item",
      required: true,
    },
    status: ["PENDING", "CANCELED", "DELIVERED"],
  },
  { timestamps: true }
);

export default mongoose.model<FoodOrderSchemaType>(
  "food_order",
  FoodOrderSchema
);
