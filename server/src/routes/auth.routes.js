import { Router } from "express";
import { SignUp, Login } from "../controllers/auth.controller.js";
import { validateJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/signup", SignUp);
router.post("/login", validateJWT, Login);

export default router;
