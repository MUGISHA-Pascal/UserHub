"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AppController_1 = require("../controllers/AppController");
const AppRoutes = (0, express_1.Router)();
AppRoutes.post("/Add-user", AppController_1.AppPost);
AppRoutes.get("/All-users", AppController_1.AppGet);
exports.default = AppRoutes;
