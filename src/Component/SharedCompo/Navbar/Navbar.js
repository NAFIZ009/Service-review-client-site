import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextAuth } from '../../../Context/AuthContext';
import './Navbar.css';
const Navbar = () => {
    const {user,loading,logOut}=useContext(ContextAuth);
    console.log(user);
    return (
        <div className="navbar bg-base-100 py-6 w-full max-w-screen-xl mx-auto">
  <div className="navbar-start sm-F-width">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-md">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        {
          loading===false&&user&&<>
            <li><Link to={`/reviews/${user.email}`}>My Reviews</Link></li>
            <li><Link to={`/addservice/${user.email}`}>Add Service</Link></li>
            </>
        }
        <li className='hidden listItem-register'>
        {
            loading===false&&user?<div className='flex gap-1'>
            <div className="flex gap-1 content-center justify-center">
        <h1 className='text-xl font-bold'>{user.displayName}</h1>
        <div className="avatar flex ">
        <div className="w-8 h-10 self-center rounded-full">
        <img src={user.photoURL}   alt="" />
        </div>
        </div>
        </div>
            <Link onClick={()=>logOut()} className='btn btn-ghost normal-case'>Log Out</Link>
            </div>
            :
            <>
            <Link to='/login' className='btn btn-ghost normal-case mb-2'>Sign In</Link>
            <Link to='/register' className="btn text-white">Register</Link>
            </>
        }
        </li>
      </ul>
    </div>
    <Link to='/' className="normal-case navlink">Video <span className='text-orange-500'>Walah</span> </Link>
  </div>
  <div className="navbar-center hidden lg:flex text-md font-bold">
    <ul className="menu menu-horizontal p-0">
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/services'>Services</Link></li>
    <li><Link to='/blogs'>Blogs</Link></li>
    {
        loading===false&&user&&<>
        <li><Link to={`/reviews/${user.email}`}>My Reviews</Link></li>
        <li><Link to={`/addservice/${user.email}`}>Add Service</Link></li>
        </>
    }
    </ul>
  </div>
  <div className="navbar-end smHidden">
    {
        loading===false&&user?<>
        <div className="flex gap-2 content-center justify-center">
        <h1 className='text-xl font-bold self-center'>{user.displayName}</h1>
        <div className="avatar">
        <div className="w-10 rounded-full">
        <img src={user.photoURL}   alt="" />
        </div>
        </div>
        </div>
        <Link onClick={()=>logOut().then(()=>{})} className='btn btn-ghost normal-case'>Log Out</Link>
        </>:<>
        <Link to='/login' className='btn btn-ghost normal-case mr-4'>Sign In</Link>
        <Link to='/register' className="btn text-white">Register</Link>
        </>
    }
    
    
  </div>
</div>
    );
};

export default Navbar;