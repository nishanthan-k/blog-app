import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import dotenv from "dotenv";
import { ApiResponse } from "../utils/ApiResponse.js";
dotenv.config({ path: ".env.development" });

const jwtSecretKey = process.env.JWT_PASSWORD;

const userAlreadyExists = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  req.userExists = user !== null;

  next();
};

const userAlreadyLoggedIn = (req, res, next) => {
  const token = req.headers.authorization;
};

const validateJWT = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json(new ApiResponse(401, "JWT token not provided"));
  }

  try {
    const decoded = jwt.verify(token, jwtSecretKey);

    next();
  } catch (error) {
    if (error?.name === "TokenExpiredError") {
      res.status(401).json(new ApiResponse(401, "JWT token expired"));
    }

    res.status(401).json(new ApiResponse(401, `JWT error - ${error?.message}`));
  }
};

export { userAlreadyExists, userAlreadyLoggedIn, validateJWT };
