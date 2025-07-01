import express from "express";
const router = express.Router();
import * as authController from "../controllers/auth/index.js";

router.post("/signup", authController.signUp);

export default router;
