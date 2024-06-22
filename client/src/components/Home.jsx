import React from "react";
import BlogCard from "./blogCard/BlogCard";

const Home = () => {
  const data = {
    type_of: "article",
    id: 1896865,
    title: "Advanced NVM Commands for Efficient Node.js Version Management",
    description:
      "Managing multiple Node.js versions is a breeze with Node Version Manager (NVM). While many developers are familiar with basic commands, there are several advanced features that can further streamline your development workflow. In this guide, we dive deeper into NVM's capabilities, uncovering lesser-known commands and tips to boost your productivity.",
    readable_publish_date: "Jun 22",
    slug: "advanced-nvm-commands-for-efficient-nodejs-version-management-4h5l",
    path: "/rigalpatel001/advanced-nvm-commands-for-efficient-nodejs-version-management-4h5l",
    url: "https://dev.to/rigalpatel001/advanced-nvm-commands-for-efficient-nodejs-version-management-4h5l",
    comments_count: 0,
    public_reactions_count: 0,
    collection_id: null,
    published_timestamp: "2024-06-22T10:35:28Z",
    positive_reactions_count: 0,
    cover_image:
      "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Feft3igigpttofn5f99n4.jpg",
    social_image:
      "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Feft3igigpttofn5f99n4.jpg",
    canonical_url:
      "https://dev.to/rigalpatel001/advanced-nvm-commands-for-efficient-nodejs-version-management-4h5l",
    created_at: "2024-06-22T10:26:20Z",
    edited_at: null,
    crossposted_at: null,
    published_at: "2024-06-22T10:35:28Z",
    last_comment_at: "2024-06-22T10:35:28Z",
    reading_time_minutes: 2,
    tag_list: ["node", "nvm", "javascript", "nodeversionmanager"],
    tags: "node, nvm, javascript, nodeversionmanager",
    user: {
      name: "Rigal Patel",
      username: "rigalpatel001",
      twitter_username: null,
      github_username: "rigalpatel001",
      user_id: 129489,
      website_url: null,
      profile_image:
        "https://media.dev.to/cdn-cgi/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F129489%2Ff3be9b9a-e305-4248-81fd-51707a2fc8bf.png",
      profile_image_90:
        "https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F129489%2Ff3be9b9a-e305-4248-81fd-51707a2fc8bf.png",
    },
  };

  return (
    <main className="py-4 flex flex-col gap-3">
      <BlogCard data={data} />
      <BlogCard data={data} />
      <BlogCard data={data} />
      <BlogCard data={data} />
      <BlogCard data={data} />
      <BlogCard data={data} />
      <BlogCard data={data} />
      <BlogCard data={data} />
      <BlogCard data={data} />
      <BlogCard data={data} />
      <BlogCard data={data} />
      <BlogCard data={data} />
      <BlogCard data={data} />
      <BlogCard data={data} />
      <BlogCard data={data} />
      <BlogCard data={data} />
      <BlogCard data={data} />
    </main>
  );
};

export default Home;
