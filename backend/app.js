import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

app.get("/", (req, res) => {
  res.json({ message: "Hello World", data: null });
});

export default app;
