import { Router } from "express";
import { getBlogs } from "../controllers/blog.controller.js";

const router = Router();

router.get("/latest", getBlogs);

export default router;
