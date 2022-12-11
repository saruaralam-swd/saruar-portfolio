import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import ProjectDetails from "../../Pages/Projects/ProjectDetails";
import Projects from "../../Pages/Projects/Projects";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/projects',
        loader: () => fetch('https://saruar-portfolio-server.vercel.app/projects'),
        element: <Projects></Projects>
      },
      {
        path: '/project-details/:id',
        loader: ({params}) => fetch(`https://saruar-portfolio-server.vercel.app/project-details/${params.id}`),
        element: <ProjectDetails></ProjectDetails>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
  
]);