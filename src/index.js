import express from "express";
import dotenv from "dotenv";
import messageRouter from "./api/routers/MessageRouter.js";
import { studentRouter } from './api/routers/studentsRoutes.js';
import { assignmentRouter } from './api/routers/assignmentRouter.js';
const app = express();
dotenv.config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use('/api/message', messageRouter);
app.use('/api/students', studentRouter);
app.use('/api/assignment', assignmentRouter);


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