import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { thumbnail, blogger, title, tags } = blog;
  const { img, name, date, reading_time } = blogger;

  return (
    <div
      key={blog?._id}
      className="space-y-5 mb-10 border-2 border-slate-200 rounded-md p-3 flex flex-col"
    >
      <Link>
        <img src={thumbnail} alt="thumb img" />
      </Link>
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <img src={img} className="w-10 h-10" alt="blogger1 img" />
          <div>
            <strong>{name}</strong>
            <p>{date}</p>
          </div>
        </div>
        <p>{reading_time} min</p>
      </div>
      <Link className="text-3xl font-bold flex-grow">
        <h3>{title}</h3>
      </Link>
      <div className="flex gap-5">
        {tags.map((tag, i) => (
          <p key={i} className="text-gray-600 text-xl font-normal">
            #{tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Blog;
