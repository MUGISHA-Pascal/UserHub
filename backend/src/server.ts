import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import AppRoutes from "./routes/AppRoutes";
dotenv.config();
const app: Express = express();
const connect = async () => {
  await mongoose.connect().then(() => {
    console.log("connected to the database");
  });
};
connect();
app.use("/app", AppRoutes);
const port = process.env.PORT;
app.listen(port, () => {
  console.log("server is running on port " + port);
});
