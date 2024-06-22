import React, { useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const TagButton = ({ tag, symbol }) => (
  <div className="border border-solid border-gray-700 w-fit px-2 rounded-md">
    {symbol ? `+${tag}` : `#${tag}`}
  </div>
);

const BlogTag = (props) => {
  const { tagList } = props;
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="flex flex-wrap items-center gap-3">
      <TagButton tag={tagList[0]} />
      {showAll ? (
        <>
          {tagList.map((tag, i) => i >= 1 && <TagButton key={i} tag={tag} />)}
          <div
            className="flex select-none cursor-pointer"
            onClickCapture={() => setShowAll(false)}
          >
            <span className="text-sm">show less</span>
            <MdKeyboardDoubleArrowUp size={10} className="self-center" />
          </div>
        </>
      ) : (
        <div onClick={() => setShowAll(true)} className="cursor-pointer">
          <TagButton tag={`${tagList.length - 1} tags`} symbol="plus" />
        </div>
      )}
    </div>
  );
};

export default BlogTag;
