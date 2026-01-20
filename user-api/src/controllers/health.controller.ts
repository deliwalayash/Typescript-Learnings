import type { Request, Response } from "express";
import { getHealthStatus } from "../services/health.service";
import { ApiResponse } from "../types/api-response";

type Healthresponse={
    status:string
}


export const getHealth = (req: Request, res: Response<ApiResponse<Healthresponse>>) => {
    const data=getHealthStatus()
    res.json({
        success:true,
        data:data
    })
};

