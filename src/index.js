import express from "express";
import dotenv from "dotenv";
import messageRouter from "./api/routers/MessageRouter.js";

const app = express();
dotenv.config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use('/api', messageRouter);

app
app.get('/', (req, res)=>{
    res.send({
            message: 'Welcome to this API.',
          })
})

app.get("/ping", (_req, res) => {
    res.status(200);
    return res.json("Pong")
});

export default app;