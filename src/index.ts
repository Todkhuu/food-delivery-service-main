import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { configDotenv } from "dotenv";
import { connectMongoDb } from "./database/db";
import categoryRoute from "./routes/food-category.route";
import foodRoute from "./routes/food.route";
import userRoute from "./routes/user.route";
import foodOrderRoute from "./routes/food-order.route";

configDotenv();
connectMongoDb();

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT;

app.use("/food_category", categoryRoute);
app.use("/foods", foodRoute);
app.use("/auth", userRoute);
app.use("/food_order", foodOrderRoute);

app.listen(port, () => {
  console.log(`Port is starting ${port}`);
});
