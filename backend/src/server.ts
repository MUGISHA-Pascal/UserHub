import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import AppRoutes from "./routes/AppRoutes";
dotenv.config();
const app: Express = express();
app.use(express.json());
const connect = async () => {
  const MongoUrl = process.env.MongoUrl;
  await mongoose.connect(MongoUrl as string).then(() => {
    console.log("connected to the database");
  });
};
connect();
app.use(cors());
app.use("/app", AppRoutes);
const port = process.env.PORT;
app.listen(port, () => {
  console.log("server is running on port " + port);
});
