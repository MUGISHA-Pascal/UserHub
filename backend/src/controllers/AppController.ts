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

export const AppUpdate = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { FirstName, SecondName, Phone, Email } = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, {
      FirstName,
      SecondName,
      Phone,
      Email,
    });
    console.log(updatedUser);
    res.send({ updatedUser });
  } catch (error) {
    console.log("the error is ", error);
    res.send(error);
  }
};

export const AppDelete = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.send(deletedUser);
  } catch (error) {
    console.log("the error is " + error);
    res.send(error);
  }
};
