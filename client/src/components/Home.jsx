import React, { useEffect, useState } from "react";
import BlogCard from "./blogCard/BlogCard";
import { blogUrls } from "../utils/apiUrls";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const url = `${blogUrls.fetchBlogs}`;

    const handleFetchBlogs = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Unable to fetch blogs");
        }

        const data = await response.json();
        setBlogs(data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    handleFetchBlogs();
  }, []);

  return (
    <main className="py-4 grid sm:grid-cols-2 md:grid-cols-3 gap-y-4">
      {blogs.map((data, i) => (
        <BlogCard key={i} data={data} />
      ))}
    </main>
  );
};

export default Home;
