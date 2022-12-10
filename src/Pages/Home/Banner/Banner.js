import React from 'react';
import './Banner.css'
// import img from '../../../assets/profile-img.png';
import img from '../../../assets/my-img.jpeg';

import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Banner = () => {
  return (
    <div className='min-h-[600px] md:flex items-center p-5'>
      <div className='md:w-1/2 space-y-2'>
        <p className='text-lg'>Hey There !</p>
        <p className='text-4xl md:text-5xl  font-semibold'>I am Saruar Alam</p>
        <p>
          <Typewriter
            options={{
              strings: ['React Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <p>I am a Front-end Web Developer. I love to use my creativity and make something new. That's why I love to work with React.js . Over the last year, I gather knowledge in various parts of web development such as React, MongoDB, firebase, Node, Express, ES6, JavaScript, CSS3, HTML5 from "programming-hero". My ultimate goal is to become an awesome full-stack web developer and also can handle the back-end smoothly.</p>
        {/* <Link to='/contact' className='block'><button className='border px-4 py-1 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white duration-500'>Contact me</button></Link> */}
        <a href='https://form.jotform.com/223434222605042' className='block'><button className='border px-4 py-1 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white duration-500'>Contact me</button></a>
      </div>

      <div className='w-1/2 mx-auto mt-10'>
        <img className='mx-auto rounded-full w-full md:w-2/3 lg:w-1/2' src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;