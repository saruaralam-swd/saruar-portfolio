import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const BannerText = () => {
  return (
    <div>
      <div className="flex text-center justify-center mt-40">
        <div className="z-50">
          <h1 className="text-5xl font-bold mb-5">
            Hi, I am <span className="text-[#FFA503]">Saruar</span>
          </h1>

          <p>
            I am a front and MERN Stack developer, I can provide clean code and
            pixel-perfect design <br />I also make the website more and & more
            attractive with web animation
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="flex justify-center items-center gap-5 z-50">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://web.facebook.com/saruaralam2001"
          >
            <FaFacebook className="text-2xl cursor-pointer hover:text-white duration-500" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/saruaralam-swd"
          >
            <FaGithub className="text-2xl cursor-pointer hover:text-white duration-500" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/saruaralam/"
          >
            <FaLinkedin className="text-2xl cursor-pointer hover:text-white duration-500" />
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <a
          href="https://form.jotform.com/223434222605042"
          target="_blank"
          className="z-50 border px-3 py-1 rounded-3xl text-[#FFA503] hover:bg-slate-300 hover:text-black duration-500"
          rel="noreferrer"
        >
          <button>Contact me</button>
        </a>
      </div>
    </div>
  );
};

export default BannerText;
