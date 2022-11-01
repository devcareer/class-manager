import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded());

app.get("/ping", (_req, res) => {
    res.status(200);
    return res.json("Pong")
});

export default app;