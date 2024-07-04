import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ProjectLoader from "../../Components/ProjectLoader";

const Projects = () => {
  useTitle("Projects");
  const [projectsLoader, setProjectsLoader] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://saruar-portfolio-server.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjectsLoader(false);
        setProjects(data);
      });
  }, []);

  return (
    <div className="my-10 px-5">
      <h2 className="text-3xl text-center font-semibold mb-5">My Projects</h2>

      {projectsLoader && <ProjectLoader />}

      <div className="grid md:grid-cols-3 gap-10 ">
        {projects.map((project) => (
          <div
            key={project._id}
            className="border border-indigo-700 rounded-md hover:shadow-md "
          >
            <Link
              to={`/project-details/${project._id}`}
              className="h-[300px] block bg-top hover:bg-bottom duration-1000 ease-line ar bg-no-repeat bg-cover rounded-md"
              style={{ backgroundImage: `url(${project?.tumbleImg})` }}
            ></Link>
            <div className="p-5">
              <h2 className="font-semibold flex justify-between">
                <span className="text-lg">
                  {project?.title.length > 30
                    ? project?.title.slice(0, 35) + "..."
                    : project.title}
                </span>
                <span>
                  <span>
                    <a
                      className="inline-block"
                      href={project?.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt
                        className="inline w-5 h-5"
                        title="live preview"
                      />
                    </a>
                  </span>
                </span>
              </h2>

              {/* <Link to={`/project-details/${project._id}`}>
                <button className="px-4 py-1 rounded-full border text-white bg-indigo-500 hover:bg-white hover:border-indigo-600 hover:text-black duration-500 mt-3">
                  Details
                </button>
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
