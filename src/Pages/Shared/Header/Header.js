import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const menuitem = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>Blog</Link></li>
    <li><Link to='/'>Projects</Link></li>
  </>

  return (
    <div className="navbar border-b-2">
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
          <button className='border px-4 py-1 rounded-full hover:border-indigo-500 duration-500'>My Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Header;