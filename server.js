import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";

import connectDB from "./config/mongodb.js";
import authRouter from "./routers/authRouter.js";
import userRouter from "./routers/userRouter.js";
import searchRouter from "./routers/searchRouter.js";
import detailsRouter from "./routers/detailsRouter.js";
import reviewRouter from "./routers/reviewRouter.js";

const app = express();
const port = process.env.PORT || 8000;
connectDB();

const allowedOrigins = ["http://localhost:5173"]; 

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins,credentials:true}))

app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);
app.use('/api/search',searchRouter);
app.use('/api/details',detailsRouter);
app.use('/api/reviews',reviewRouter);

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})