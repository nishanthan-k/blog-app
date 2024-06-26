import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { requestHandler } from "../utils/requestHandler.js";

const getBlogs = requestHandler(async (req, res) => {
  const response = await fetch("https://dev.to/api/articles/latest");

  if (!response.ok) {
    throw new ApiError(500, "Unable to fetch blogs");
  }

  const blogs = await response.json();
  res
    .status(200)
    .json(new ApiResponse(200, "Blogs fetched successfully", blogs));
});

export { getBlogs };
