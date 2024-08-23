import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "../env.development" });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      retryWrites: true,
      tls: true,
      tlsAllowInvalidCertificates: false,
      tlsAllowInvalidHostnames: false,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Failed to connect MongoDB", err);
    throw err;
  }
};

export { connectDB };
