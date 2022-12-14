import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

const Header = () => {

  const menuitem = <>
    <li><Link to='/'><FaHome /></Link></li>
    <li><Link to='/aboutMe'>About me</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    <li><Link to='/projects'>Projects</Link></li>
  </>

  return (
    <div className="navbar bg-slate-100/60 backdrop-blur border-b-2 sticky top-0 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuitem}
          </ul>
        </div>

        <div className='lg:flex hidden'>
          <ul className="menu menu-horizontal">
            {menuitem}
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        <a href="https://drive.google.com/file/d/1Mjz340Y_nacMzG6Hp0F8K2S8PKZZAktN/view?usp=share_link" target='_blank' rel="noreferrer">
          <button className='border px-4 py-1 rounded-full border-indigo-500 hover:bg-indigo-500 hover:text-white duration-500'>My Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Header;