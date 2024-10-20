import { Router } from "express";
import { AppGet, AppPost } from "../controllers/AppController";

const AppRoutes = Router();
AppRoutes.post("/Add-user", AppPost);
AppRoutes.get("/All-users", AppGet);
export default AppRoutes;
