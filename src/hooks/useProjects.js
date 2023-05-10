import { useEffect, useState } from "react";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [projectsLoader, setProjectsLoader] = useState(true);

  useEffect(() => {
    fetch('https://saruar-portfolio-server.vercel.app/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setProjectsLoader(false);
      })
  }, []);

  return [projects, projectsLoader];
};

export default useProjects;