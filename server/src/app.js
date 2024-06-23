import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// routes
import blogRouter from "./routes/blog.routes.js";

app.use("/blog", blogRouter);

export default app;
