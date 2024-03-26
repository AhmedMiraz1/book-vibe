import {   NavLink } from "react-router-dom";


const Navbar = () => {

    
    return (
        
    <div className="navbar ">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
        >
           <NavLink to='/' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold': 'font-bold' }>
            Home
          </NavLink>
          <NavLink to='/listedBooks' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold': 'font-bold' }>
          Listed Books
          </NavLink>
          <NavLink to='/pageToRead' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold': 'font-bold' }>
          Pages to Read
          </NavLink>
        </ul>
      </div>
      <NavLink to='/' className="btn btn-ghost text-xl lg:text-3xl font-semibold lg:font-extrabold">Book Vibe</NavLink>
    </div>
    <div className="navbar-center hidden  lg:flex ">
      <ul className="menu menu-horizontal flex gap-12 px-1">
      <NavLink to='/' className={({isActive})=> isActive? ' text-[#23BE0A] font-bold': 'font-bold' }>
            Home
          </NavLink>
          <NavLink to='/listedBooks' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold': 'font-bold' }>
          Listed Books
          </NavLink>
          <NavLink to='/pageToRead' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold': 'font-bold' }>
          Pages to Read
          </NavLink>
      </ul>
    </div>
    <div className="navbar-end flex gap-3">
      <a className="  rounded-xl px-3 py-2 lg:px-6 lg:py-4 text-white font-light lg:font-semibold lg:text-2xl  bg-[#23BE0A]">Sign In</a>
      <a className="  rounded-xl px-3 py-2 lg:px-6 lg:py-4 text-white font-light lg:font-semibold lg:text-2xl  bg-[#59C6D2]">Sign Up</a>
    </div>
  </div>
    );
};

export default Navbar;