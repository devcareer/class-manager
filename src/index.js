import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initialize, authenticate,} from './middleware/auth.js';
import messageRouter from "./routers/MessageRouter.js";
import { studentRouter } from './routers/studentsRoutes.js';
import { userRouter } from './routers/userRouter.js';
const app = express();
dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(initialize());
app.use('/api/message', messageRouter);
app.use('/api/students', studentRouter);
app.use('/api/user', userRouter);


app.get('/', (req, res) => {
    res.send({
        message: 'Welcome to this API.',
    })
})

app.get("/ping", (_req, res) => {
    res.status(200);
    return res.json("Pong")
});

export default app;