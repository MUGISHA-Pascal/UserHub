import { Router } from "express";
import { AppPost } from "../controllers/AppController";

const AppRoutes = Router();
AppRoutes.post("/Add-user", AppPost);
export default AppRoutes;
