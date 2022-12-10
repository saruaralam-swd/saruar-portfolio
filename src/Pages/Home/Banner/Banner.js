import React from 'react';
import './Banner.css'
import img from '../../../assets/profile-img.png';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='h-[600px] md:flex items-center p-5'>
      <div className='md:w-1/2 space-y-2'>
        <p className='text-lg'>Hey There !</p>
        <p className='text-4xl md:text-5xl  font-semibold'>I am Saruar Alam</p>
        <p className='text-lg'>React Developer</p>
        <Link className='block'><button className='border px-4 py-1 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white duration-500'>Contact me</button></Link>
      </div>

      <div className='w-1/2 mx-auto mt-10'>
        <img className='mx-auto rounded-full w-full md:w-2/3 lg:w-1/2' src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;