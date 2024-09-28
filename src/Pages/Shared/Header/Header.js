import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { _id: 1, path: "/", name: "Home" },
    { _id: 2, path: "/aboutMe", name: "About Me" },
    { _id: 3, path: "/blog", name: "Blog" },
    { _id: 4, path: "/projects", name: "Projects" },
  ];

  return (
    <>
      <nav className="flex items-center justify-between bg-slate-200 px-2">
        <div className="md:hidden">
          <Hamburger toggled={open} toggle={setOpen} size={30} />
        </div>

        <div>
          <ul
            className={`absolute w-full gap-5 bg-slate-200 p-5 text-lg duration-1000 md:static md:flex ${
              open ? "top-11 left-0" : "left-0 -top-52"
            }`}
          >
            {routes.map((route) => (
              <li onClick={() => setOpen(!open)} key={route._id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold text-[#035CB4]" : "font-semibold"
                  }
                  to={route.path}
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <a
            href="https://drive.google.com/file/d/1Mjz340Y_nacMzG6Hp0F8K2S8PKZZAktN/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            <button className="border px-4 py-1 mr-2 rounded-full bg-indigo-500 text-white hover:bg-white hover:border-indigo-500 hover:text-black duration-500">
              My Resume
            </button>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
