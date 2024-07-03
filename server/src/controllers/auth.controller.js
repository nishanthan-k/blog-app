import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { requestHandler } from "../utils/requestHandler.js";
import { loginSchema, signUpSchema } from "../schemas/authentication.schema.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.development" });

const jwtSecretKey = process.env.JWT_PASSWORD;

const SignUp = requestHandler(async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (req.userExists) {
    res.status(409).json(new ApiResponse(409, "User already exists"));
  }

  const isValidDetails = signUpSchema.safeParse({
    email,
    password,
    confirmPassword,
  });

  if (!isValidDetails.success) {
    res.status(401).json(new ApiResponse(401, isValidDetails.error));
  }

  const token = jwt.sign({ email, password }, jwtSecretKey);

  const user = new User({ email, password, confirmPassword });

  await user.save();

  res
    .status(200)
    .json(new ApiResponse(200, "Account created successfully", { token }));
});

const Login = requestHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!req.userExists) {
    res.status(404).json(new ApiResponse(404, "No user found"));
  }

  const isValidDetails = loginSchema.safeParse({ email, password });

  if (!isValidDetails.success) {
    res.status(401).json(new ApiResponse(401, isValidDetails.error));
  }

  res.status(200).json(new ApiResponse(200, "Login successful"));
});

export { SignUp, Login };
