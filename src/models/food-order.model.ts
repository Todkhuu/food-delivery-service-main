import mongoose, { Schema } from "mongoose";

type FoodOrderSchemaType = {
  user: Schema.Types.ObjectId;
  totalPrice: number;
  foodOrderItems: { food: Schema.Types.ObjectId; quantity: number };
  status: "PENDING" | "CANCELED" | "DELIVERED";
};

const FoodOrderSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "auth", required: true },
    totalPrice: { type: Number, required: true },
    foodOrderItems: [
      {
        food: { type: Schema.Types.ObjectId, ref: "foods", required: true },
        quantity: { type: Number, required: true },
      },
    ],
    status: ["PENDING", "CANCELED", "DELIVERED"],
  },
  { timestamps: true }
);

export default mongoose.model<FoodOrderSchemaType>(
  "food_order",
  FoodOrderSchema
);

// {
//   type: [Schema.Types.ObjectId],
//   rel: "food_order_item",
//   required: true,
// },
