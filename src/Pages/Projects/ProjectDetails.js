import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
  const project = useLoaderData();
  const { title, des, features, github, images, live, techs } = project;
  console.log(images);

  return (
    <div className='py-10 p-5 bg-slate-100 rounded-md'>
      <h2 className='text-4xl font-semibold text-indigo-500 mb-2'>{title}</h2>
      <p className='mb-2'>{des}</p>
      <p className='font-semibold mb-2'>Features</p>
      {
        features.map((feature, index) => <li key={index}>{feature}</li>)
      }
      <p><span className='font-semibold'>Technology: </span> {techs}</p>
      <div className='mt-2'>
        <a href={live} target='_blank' className='text-xl font-semibold text-indigo-500 mr-2' rel="noreferrer">Live</a>|
        <a href={github} target='_blank' className='text-xl font-semibold text-indigo-500 ml-2' rel="noreferrer">Github</a>
      </div>
      <div className="divider"></div>
      <div className='px-5 md:px-10'>
        {
          images.map((img, index) =>
            <div key={index} className='mt-10'>
              <h2 className=' bg-slate-500 text-white w-[30px] h-[30px] rounded-full flex justify-center items-center mb-1'> {index + 1}</h2>
              <img src={`${img}`} className='rounded-md' alt='project images' />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default ProjectDetails;