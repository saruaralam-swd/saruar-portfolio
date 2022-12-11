import React from 'react';
// import project10 from '../../assets/projects/10.png'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';

const Projects = () => {
  const projects = useLoaderData();

  return (
    <div className='my-10 p-5 md:p-0'>
      <h2 className="text-3xl font-semibold mb-5">My Projects</h2>

      <div className='grid md:grid-cols-2 gap-10'>
        {
          projects.map(project =>
            <div className='border rounded-md shadow-xl' key={project._id}>
              <img src={project?.tumbleImg} alt="" className='rounded-md' />
              <div className='p-6'>
                <h2 className='font-semibold mt-5 flex justify-between '>
                  <span className='text-lg'>{project?.title}</span>
                  <span className='flex items-center gap-5'>
                    <span><a className='inline-block' href={project?.github} target='_blank' rel="noreferrer"><FaGithub className='inline w-6 h-6' /></a></span>
                    <span><a className='inline-block' href="https://learning-platform-client-f6cbc.web.app/" target='_blank' rel="noreferrer"><FaExternalLinkAlt className='inline w-5 h-5' title='live preview' /></a></span>
                  </span>
                </h2>

                <Link to={`/project-details/${project._id}`}>
                  <button className='px-4 py-1 rounded-full border text-white bg-indigo-500 hover:bg-white hover:border-indigo-600 hover:text-black duration-500 mt-3'>Details</button>
                </Link>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Projects;