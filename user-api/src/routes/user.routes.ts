import { Router } from "express";
import { createUserController,getDataController } from "../controllers/user.controller";


const router = Router();

router.post("/", createUserController);
router.get("/data",getDataController );

export default router;
