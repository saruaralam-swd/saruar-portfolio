import React from 'react';
import './Banner.css'
import img from '../../../assets/my-img.jpeg';
import Typewriter from 'typewriter-effect';

const Banner = () => {
  return (
    <div className='min-h-[500px] md:flex items-center p-5'>
      <div className='md:w-1/2 space-y-2'>
        <p className='text-lg'>Hey There !</p>
        <p className='text-4xl md:text-5xl  font-semibold'>I am Saruar Alam</p>
        <p className='font-semibold text-indigo-500 text-lg'>
          <Typewriter
            options={{
              strings: ['React Developer', 'MERN stack developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        
        <a href='https://form.jotform.com/223434222605042' className='inline-block'><button className='border px-4 py-1 rounded-full bg-indigo-500 text-white hover:bg-white hover:border-indigo-500 hover:text-black duration-500'>Contact me</button></a>
      </div>

      <div className='w-1/2 mx-auto mt-10'>
        <img className='mx-auto w-full md:w-2/3 lg:w-1/2' src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;