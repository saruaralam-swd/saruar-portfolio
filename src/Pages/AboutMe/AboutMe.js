import React from "react";
import myImg from "../../assets/aboutMe2.png";

const AboutMe = () => {
  return (
    <div className="grid md:grid-cols-12 gap-10 px-10">
      <div className="col-span-12 lg:col-span-3 mt-10 mx-auto lg:mx-0">
        <img src={myImg} className="rounded-md" alt="MyImage" />
      </div>

      <div className="col-span-12 lg:col-span-9 mt-0 mb-4 md:mt-10 md:mb-0  space-y-4">
        <h2 className="text-3xl">Md. Saruar Alam</h2>
        <p>
          A passionate Front End Web Developer who has the ability to work both
          independently and collaboratively in a fast-paced, multi-tasking
          environment, as well as a strong desire to learn new technologies.
          Make every effort to write code that is clean, concise, and efficient.
          Code that reflects a good user experience and makes lives better. I am
          looking forward to implementing my current skills and knowledge in a
          friendly environment with a team of great software engineers and
          further enriching my knowledge in the field of software engineering.
        </p>
        <p>
          Over the last 3 years, I have gained hands-on experience building
          several highly responsive web applications using JavaScript, React,
          Node.js, Express, MongoDB, Firebase, Bootstrap, TailwindCSS, etc. I am
          familiar with Material UI, Axios, React Query, React hook form etc.
        </p>
        <a
          href="https://form.jotform.com/223434222605042"
          className="block"
          rel="noreferrer"
        >
          <button className="border px-4 py-2 rounded-full bg-indigo-500 text-white hover:bg-white hover:border-indigo-500 hover:text-black duration-500">
            Contact me
          </button>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
