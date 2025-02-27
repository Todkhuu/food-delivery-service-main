import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Port is starting ${port}`);
});
