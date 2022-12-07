import express from "express";
import dotenv from "dotenv";
import { assignmentRouter } from './routers/assignmentRouter.js';
import messageRouter from "./routers/MessageRouter.js";
import { studentRouter } from './routers/studentsRoutes.js';
import { scoreRouter } from './routers/scoreRouter.js';
const app = express();
dotenv.config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/message', messageRouter);
app.use('/api/students', studentRouter);
app.use('/api/assignment', assignmentRouter);
app.use('/api/score', scoreRouter);


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