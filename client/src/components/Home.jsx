import React, { useEffect, useState } from "react";
import BlogCard from "./blogCard/BlogCard";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const url = `${import.meta.env.VITE_RESTBASEURL}/blog/latest`;
    const fetchBlogs = async () => {
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
