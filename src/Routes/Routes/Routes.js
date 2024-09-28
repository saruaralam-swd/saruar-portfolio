import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutMe from "../../Pages/AboutMe/AboutMe";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import ProjectDetails from "../../Pages/Projects/ProjectDetails";
import Projects from "../../Pages/Projects/Projects";
import Blogs from "../../Pages/Blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/aboutMe",
        element: <AboutMe></AboutMe>,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/project-details/:id",
        loader: ({ params }) =>
          fetch(
            `https://saruar-portfolio-server.vercel.app/project-details/${params.id}`
          ),
        element: <ProjectDetails></ProjectDetails>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
