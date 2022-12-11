import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
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
        element: <Projects></Projects>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
  
]);