import express from "express";
import {login, register, logout, sendVerifyOtp, verifyEmail} from '../controllers/authController.js';
import userAuth from "../middleware/authUser.js";

const authRouter = express.Router();

authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.post('/logout',logout);
authRouter.post('/send-verify-otp',userAuth,sendVerifyOtp);
authRouter.post('/verify-account',userAuth,verifyEmail);

export default authRouter;
