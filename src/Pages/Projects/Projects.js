import React from 'react';
import project12 from '../../assets/projects/12.png'
import project11 from '../../assets/projects/11.png'
import project10 from '../../assets/projects/10.png'
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className='my-20 p-10' id='projects'>
      <h2 className="text-3xl font-semibold mb-5">My Projects</h2>

      <div className='grid md:grid-cols-3 gap-10'>
        <div className='border rounded-md bg-slate-100'>
          <div>
            <img src={project12} alt="" className='rounded-md' />
            <h2 className='font-semibold mt-5'>
              <span className='text-2xl' >Buy & Sell</span>
              <span className='ml-10'><a className='inline-block' href="https://buy-cell--web.web.app/" target='_blank' rel="noreferrer"><FaExternalLinkAlt calcMode=' inline-block ' title='live preview' /></a></span>
            </h2>

          </div>
        </div>

        <div className='border rounded-md bg-slate-100'>
          <div>
            <img src={project11} alt="" className='rounded-md' />
            <h2 className='font-semibold mt-5'>
              <span className='text-2xl'>KitoGoo</span>
              <span className='ml-10'><a className='inline-block' href="https://kitogoo-b0158.web.app/home" target='_blank' rel="noreferrer"><FaExternalLinkAlt calcMode=' inline-block ' title='live preview' /></a></span>
            </h2>

          </div>
        </div>

        <div className='border rounded-md bg-slate-100'>
          <div>
            <img src={project10} alt="" className='rounded-md' />
            <h2 className='font-semibold mt-5'>
              <span className='text-2xl'>Educrat</span>
              <span className='ml-10'><a className='inline-block' href="https://learning-platform-client-f6cbc.web.app/" target='_blank' rel="noreferrer"><FaExternalLinkAlt calcMode=' inline-block ' title='live preview' /></a></span>
            </h2>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;