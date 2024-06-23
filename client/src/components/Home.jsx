import React, { useEffect, useState } from "react";
import BlogCard from "./blogCard/BlogCard";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/blog/latest");

        if (!response.ok) {
          throw new Error("Unable to fetch blogs");
        }

        const data = await response.json();
        setBlogs(data.data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <main className="py-4 flex flex-col gap-3">
      {blogs.map((data, i) => (
        <BlogCard key={i} data={data} />
      ))}
    </main>
  );
};

export default Home;
