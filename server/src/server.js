import dotenv from "dotenv";
dotenv.config({ path: ".env.development" });

import express from "express";
import app from "./app.js";
import { connectDB } from "./db/index.js";

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect", err);
  });
