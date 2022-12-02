import { Router } from "express";
const userRouter = Router();
import { handleSignup, handleLogin } from '../controllers/userController.js';

userRouter.post('/login', handleLogin);
userRouter.post('/register', handleSignup);

export { userRouter };