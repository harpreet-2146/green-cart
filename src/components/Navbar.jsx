import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import {useAppContext} from '../context/AppContext'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {user,setUser,setShowUserLogin,navigate}=useAppContext();
  const logout=async ()=>{
    setUser(null);
    navigate('/')
  }

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      {/* Logo */}
      <NavLink to='/'>
        <img
          className="h-9"
          src={assets.logo}
          alt="Logo"
        />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>All products</NavLink>
        <NavLink to='/'>Contact</NavLink>

        {/* Search */}
        <div className="hidden lg:flex items-center border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt='search' className='w-4 h-4'/>
        </div>

        {/* Cart */}
        <div className="relative cursor-pointer">
        <img src={assets.nav_cart_icon} alt='cart' className='w-6 opacity-80' />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-5 h-5 rounded-full">
            3
          </button>
        </div>

        {/* Login Button */}
        <button className="px-5 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
          Login
        </button>
      </div>
 
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="sm:hidden"
      >
      <img src={assets.menu_icon} alt='menu'/>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
        className={`${
          open ? 'flex' : 'hidden'
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm sm:hidden`}
      >
        <NavLink to='/' onClick={()=>setOpen(false)}>Home</NavLink>
        <NavLink to='/products' onClick={()=>setOpen(false)}>All Products</NavLink>
        {user &&
        <NavLink to='/' onClick={()=>setOpen(false)}>My Orders</NavLink>
        }
        <NavLink to='/' onClick={()=>setOpen(false)}>Contact</NavLink>


        {!user ? (
          <button onClick={()=>{
            setOpen(false);
            setShowUserLogin(true);
          }} className="px-5 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
          Login
        </button>
        ):(
          <button onClick={logout} className="px-5 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
          Logout
        </button>
        )}
        
      </div>
      )}
    </nav>
  );
};

export default Navbar;
