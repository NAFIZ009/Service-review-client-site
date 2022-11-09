import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    const isLogin=false;
    return (
        <div className="navbar bg-base-100 py-6 w-full max-w-screen-xl mx-auto">
  <div className="navbar-start sm-F-width">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-md">
        <li><Link>Home</Link></li>
        <li><Link>Services</Link></li>
        <li><Link>Blogs</Link></li>
        {
            isLogin&&<>
            <li><Link>My Reviews</Link></li>
            <li><Link>Add Service</Link></li>
            </>
        }
        <li className='hidden listItem-register'>
        {
            isLogin?<Link className='btn btn-ghost normal-case'>Log Out</Link>:<>
            <Link className='btn btn-ghost normal-case mb-2'>Sign In</Link>
            <Link className="btn text-white">Register</Link>
            </>
        }
        </li>
      </ul>
    </div>
    <Link className=" normal-case navlink">Video <span className='text-orange-500'>Walah</span> </Link>
  </div>
  <div className="navbar-center hidden lg:flex text-md font-bold">
    <ul className="menu menu-horizontal p-0">
    <li><Link>Home</Link></li>
    <li><Link>Services</Link></li>
    <li><Link>Blogs</Link></li>
    {
        isLogin&&<>
        <li><Link>My Reviews</Link></li>
        <li><Link>Add Service</Link></li>
        </>
    }
    </ul>
  </div>
  <div className="navbar-end smHidden">
    {
        isLogin?<Link className='btn btn-ghost normal-case'>Log Out</Link>:<>
        <Link className='btn btn-ghost normal-case mr-4'>Sign In</Link>
        <Link className="btn text-white">Register</Link>
        </>
    }
    
    
  </div>
</div>
    );
};

export default Navbar;