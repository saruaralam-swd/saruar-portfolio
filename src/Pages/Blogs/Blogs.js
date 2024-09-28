import React from "react";
import useTitle from "../../hooks/useTitle";
import thumb1 from "../../assets/blog/1.jpg";
import thumb2 from "../../assets/blog/2.png";
import thumb3 from "../../assets/blog/3.png";
import thumb4 from "../../assets/blog/4.jpg";
import authorImg from "../../assets/blog/boy1.png";
import Blog from "./Blog";

const Blogs = () => {
  useTitle("Blog");

  const blogs = [
    {
      _id: 1,
      thumbnail: thumb1,
      blogger: {
        img: authorImg,
        name: "Mr. Raju",
        date: "Mar 14 (4 Days ago)",
        reading_time: 5,
      },
      title: "How to get your first job as a self-taught programmer",
      tags: ["Technology", "Web Development"],
    },
    {
      _id: 2,
      thumbnail: thumb2,
      blogger: {
        img: authorImg,
        name: "Ms. Anika",
        date: "Sep 10 (8 Days ago)",
        reading_time: 7,
      },
      title: "Mastering JavaScript in 2024",
      tags: ["JavaScript", "Programming"],
    },
    {
      _id: 3,
      thumbnail: thumb3,
      blogger: {
        img: authorImg,
        name: "Dr. Khan",
        date: "Sep 18 (Today)",
        reading_time: 10,
      },
      title: "Understanding State Management in Redux",
      tags: ["Redux", "State Management"],
    },
    {
      _id: 4,
      thumbnail: thumb4,
      blogger: {
        img: authorImg,
        name: "Ms. Priya",
        date: "Sep 12 (6 Days ago)",
        reading_time: 8,
      },
      title: "The Future of Frontend Frameworks",
      tags: ["Frontend", "Frameworks", "Technology"],
    },
  ];

  return (
    <div className="md:grid grid-cols-2 gap-5 mx-5 mt-5">
      {blogs.map((blog) => (
        <Blog key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
