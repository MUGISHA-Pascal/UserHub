import { Router } from "express";
import {
  AppDelete,
  AppGet,
  AppPost,
  AppUpdate,
} from "../controllers/AppController";

const AppRoutes = Router();
AppRoutes.post("/Add-user", AppPost);
AppRoutes.get("/All-users", AppGet);
AppRoutes.put("/Update-user/:id", AppUpdate);
AppRoutes.delete("/Delete-user/:id", AppDelete);
export default AppRoutes;
