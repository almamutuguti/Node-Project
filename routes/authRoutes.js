import { Router } from "express";
import { register } from "../controllers/userAuthentication.js";

const router = Router();

router.post("/register", register)

export default router