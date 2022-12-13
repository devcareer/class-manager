import { Router } from "express";
const userRouter = Router();
import userController from '../controllers/UserController.js';
import {authenticate,} from '../middleware/auth'

userRouter.post('/login', userController.handleLogin);
userRouter.post('/register', userController.handleSignup);
userRouter.post('/addstudent', authenticate(), userController.addStudent);
userRouter.get("/verify/:id/:token", userController.verify); 

export { userRouter };