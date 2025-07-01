import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

import * as routes from "./src/routes/index.js";
import { errorHandler, notFound } from "./src/middlewares/errorHandler.js";

app.use(express.json());

app.use("/api/auth", routes.authRouter);

app.get("/", (req, res) => {
  res.json({ message: "Hello World", data: null });
});

app.use(errorHandler);
app.use(notFound);

export default app;
