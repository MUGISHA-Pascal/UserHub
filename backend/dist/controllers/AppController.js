"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppPost = void 0;
const User_1 = __importDefault(require("../models/User"));
const AppPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { FirstName, SecondName, Phone, Email } = req.body;
    try {
        const user = yield new User_1.default({ FirstName, SecondName, Phone, Email }).save();
        res.send({ user });
    }
    catch (error) {
        console.log("the error is " + error);
        res.send(error);
    }
});
exports.AppPost = AppPost;
