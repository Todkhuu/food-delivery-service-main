import mongoose from "mongoose";

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "");
    console.log("Mongodb success");
  } catch (error) {
    console.log("Mongodb error");
  }
};
