import { Request, Response, NextFunction } from "express";
import { User } from "../models/user";
import { randomUUID } from "crypto";
import { createUser, findUser } from "../repositories/userRepository";
import { generateToken } from "../middlewares/authMiddleware";

export const registerUser = (req:Request, res:Response, next:NextFunction) => {
    try {
        const { username, password } = req.body
        const newUser: User = {id: randomUUID(), username, password, role : "security"}
       
        createUser(newUser);

        res.status(201).json(newUser);
    } catch (error) {
        next(error)
    }
}

export const loginUser = (req:Request, res:Response, next:NextFunction) => {
    try {
        const { username, password } = req.body
        
        const user = findUser(username);

        if(!user){
            res.status(404).json({ message: 'user not found'})
            return;
        }

        if(user.password !== password){
            res.status(401).json({ message: 'invalid credentials'})
            return;
        }

        const token = generateToken(user.id, user.role)

        res.status(200).json({ message: "success", token })
    } catch (error) {
        next(error)
    }
}