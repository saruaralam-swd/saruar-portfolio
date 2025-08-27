import { Link, NavLink } from "react-router-dom";

const Banner2Header = () => {
  return (
    <>
      <div className="flex justify-between items-center w-[90%] mx-auto my-8">
        <div className="text-white z-40 text-3xl font-bold">
          <Link to="/home">Saruar Alam</Link>
        </div>

        {/* <div className=" z-40">
          <ul className="flex items-center  gap-5 uppercase">
            <NavLink to="/aboutMe">About</NavLink>
            <NavLink to="/contact">Projects</NavLink>
            <NavLink to="/blogs">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>
        </div> */}

        <div className="z-40">
          <a
            href="https://drive.google.com/file/d/1Mjz340Y_nacMzG6Hp0F8K2S8PKZZAktN/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            <button className="border px-3 py-1 rounded-3xl text-white hover:bg-slate-300 hover:text-black duration-500">
              My Resume
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner2Header;
