import type { Request, Response } from "express";
import type { ApiResponse } from "../types/api-response";
import { createUser,getAllUsers } from "../services/user.service";
import { User } from "../types/User";

export const createUserController = (req: Request, res: Response<ApiResponse<User | null>>) => {
   const { name,email } = req.body;

   if (!name || !email) {
   return res.status(400).json({
      success: false,
      data: null,
      message: "Name and email are required"
   });
}


   const user = createUser(name,email);

   res.json({
      success: true,
      data: user
   });
};

export const getDataController = (req:Request,res:Response<ApiResponse<User[]>>)=>{

   const data=getAllUsers()
   res.json({
      success:true,
      data:data
   })

}


