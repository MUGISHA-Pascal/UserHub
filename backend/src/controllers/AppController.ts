import { Request, Response } from "express";
import User from "../models/User";
export const AppPost = async (req: Request, res: Response) => {
  const { FirstName, SecondName, Phone, Email } = req.body;
  try {
    const user = await new User({ FirstName, SecondName, Phone, Email }).save();
    res.send({ user });
  } catch (error) {
    console.log("the error is " + error);
    res.send(error);
  }
};

export const AppGet = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.send({ users });
  } catch (error) {
    console.log("the error is " + error);
    res.send(error);
  }
};
