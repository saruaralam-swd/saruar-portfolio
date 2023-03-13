import React from 'react';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Projects = () => {
  useTitle('Projects')
  const projects = useLoaderData();

  return (
    <div className='my-10 px-5'>
      <h2 className="text-3xl font-semibold mb-5">My Projects</h2>

      <div className='grid md:grid-cols-3 gap-10'>
        {
          projects.map(project =>
            <div key={project._id} className="border rounded-md hover:shadow-md " >
              <div className='h-[300px] bg-top hover:bg-bottom duration-1000 ease-linear bg-no-repeat bg-cover' style={{ backgroundImage: `url(${project?.tumbleImg})` }}></div>
              <div className='p-5'>
                <h2 className='font-semibold flex justify-between'>
                  <span className='text-lg'>{project?.title.length > 30 ? project?.title.slice(0, 30) + '...' : project.title}</span>
                  <span className='flex items-center gap-5'>
                    <span><a className='inline-block' href={project?.github} target='_blank' rel="noreferrer"><FaGithub className='inline w-6 h-6' title='Github code' /></a></span>
                    <span><a className='inline-block' href={project?.live} target='_blank' rel="noreferrer"><FaExternalLinkAlt className='inline w-5 h-5' title='live preview' /></a></span>
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