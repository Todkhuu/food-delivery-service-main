import mongoose, { Schema } from "mongoose";

type UserSchemaType = {
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: "USER" | "ADMIN";
  orderedFoods: [Schema.Types.ObjectId];
  // ttl
  isVerified: boolean;
};

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    role: ["USER", "ADMIN"],
    orderedFoods: [
      {
        type: Schema.Types.ObjectId,
        rel: "food_order",
        required: true,
      },
    ],
    // ttl
    isVerified: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<UserSchemaType>("user", UserSchema);
