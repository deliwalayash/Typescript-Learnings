import express from 'express'
import healthrouter from "./routes/health.route";
import userRouter from './routes/user.routes'

const app=express()
app.use(express.json())
app.use('/health',healthrouter)
app.use("/users", userRouter);


export default app