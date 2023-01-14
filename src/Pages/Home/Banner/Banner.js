import React from 'react';
import './Banner.css'
import img from '../../../assets/my-img.jpeg';
import Typewriter from 'typewriter-effect';
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Banner = () => {
  return (
    <div className='min-h-[500px] md:flex items-center p-5'>
      <div className='md:w-1/2 space-y-3 pl-14 text-center md:text-left lg:text-left'>
        <p className='text-xl'>Hi, I'm</p>
        <p className='text-4xl md:text-5xl font-semibold'>Md. Saruar Alam</p>
        <p className='font-semibold text-[#6366F1] text-2xl'>
          <Typewriter
            options={{
              strings: ['React js Developer', 'MERN Stack Developer', 'Frontend Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        
        {/* social icons */}
        <a href="https://web.facebook.com/saruaralam2001" target="_blank" className='inline-block' rel="noreferrer"><BsFacebook className='h-7 w-7' /></a>
        <a href="https://github.com/saruaralam-swd" target="_blank" className='inline-block mx-4' rel="noreferrer"><BsGithub className='h-7 w-7' /></a>
        <a href="https://www.linkedin.com/in/saruaralam/" target="_blank" className='inline-block' rel="noreferrer"><BsLinkedin className='h-7 w-7 rounded-full' /></a>
        <a href='https://form.jotform.com/223434222605042' className='block'><button className='border px-4 py-2 rounded-full bg-indigo-500 text-white hover:bg-white hover:border-indigo-500 hover:text-black duration-500'>Contact me</button></a>
      </div>

      <div className='w-1/2 mx-auto mt-10'>
        <img className='mx-auto w-full md:w-2/3 lg:w-1/2' src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;