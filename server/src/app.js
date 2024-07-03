import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// routes
import blogRouter from "./routes/blog.routes.js";
import authRouter from "./routes/auth.routes.js";
import {
  userAlreadyExists,
  userAlreadyLoggedIn,
} from "./middlewares/auth.middleware.js";

app.use("/blog", blogRouter);
app.use("/auth", userAlreadyExists, authRouter);

export default app;
