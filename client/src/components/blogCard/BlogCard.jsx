import { Avatar } from "flowbite-react";
import React, { useState } from "react";
import { BsDot, BsThreeDots } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { Img } from "react-image";
import BlogTag from "./BlogTag";
import {
  Comment,
  DownVote,
  Link,
  Saved,
  UpVote,
} from "../../assets/images/SvgIcons";

const ErrorImageLoader = () => <p>Error Loading Image...</p>;

const BlogCard = (props) => {
  const { data } = props;
  const { user: userDetails } = data;
  const [buttonsClicked, setButtonsClicked] = useState({
    UpVote: false,
    DownVote: false,
    Comments: false,
    Saved: false,
  });
  const buttonData = [
    {
      Btn: UpVote,
      count: data["positive_reactions_count"],
    },
    {
      Btn: DownVote,
    },
    {
      Btn: Comment,
      count: data["comments_count"],
    },
    {
      Btn: Saved,
    },
  ];

  const handleIcons = (name) => {
    setButtonsClicked((prev) => ({
      ...prev,
      [name]: !buttonsClicked[name],
    }));
  };

  const handleBlog = (url) => window.open(url, "_blank");

  return (
    <div className="px-4">
      {data["type_of"] === "article" && (
        <div className="border border-solid border-gray-700 rounded-md px-4 py-2 shadow-md flex flex-col gap-4">
          {userDetails && (
            <section className="flex">
              <div className="w-full flex justify-between">
                <div className="flex gap-4">
                  <Avatar img={data.user.profile_image} rounded />
                  <div>
                    <h2 className="font-semibold text-lg">{data.user.name}</h2>
                    <div className="flex items-end">
                      <span className="text-sm">{`${data["reading_time_minutes"]}m read time`}</span>
                      <BsDot />
                      <span className="text-sm">{`${data["readable_publish_date"]}`}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <FiExternalLink
                    size={20}
                    className="hover:text-gray-300 hover:cursor-pointer"
                    onClick={() => handleBlog(data.url)}
                  />
                  <BsThreeDots
                    size={20}
                    className="hover:text-gray-300 hover:cursor-pointer"
                  />
                </div>
              </div>
            </section>
          )}

          <section className="flex flex-col gap-3">
            <h1 className="text-lg font-semibold">{data.title}</h1>
            {data["tag_list"] && <BlogTag tagList={data["tag_list"]} />}
          </section>

          <section>
            <Img src={data["cover_image"]} unloader={ErrorImageLoader} />
          </section>

          <section className="flex gap-6">
            {buttonData.map(({ Btn, count }, i) => (
              <div
                className="flex items-center gap-2"
                onClickCapture={() => handleIcons(Btn)}
              >
                <Btn clicked={buttonsClicked[`${Btn}`]} />
                {count && <p>{count}</p>}
              </div>
            ))}
          </section>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
