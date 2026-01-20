import { User } from "../types/User";
import { users } from "../data/user.store";
import type { Request,Response } from "express";
import { ApiResponse } from "../types/api-response";

export const createUser = (name:string,email:string)=>{
    const newuser:User ={
        id:Date.now().toString(),
        name:name,
        email:email,
        createdAt:new Date()
    }

    users.push(newuser)
    return newuser
}

export const getAllUsers = () => {
    return users
};
