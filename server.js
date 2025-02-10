import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";

import connectDB from "./config/mongodb.js";
import authRouter from "./routers/authRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();
const port = process.env.PORT || 8000;
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true}))

app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})