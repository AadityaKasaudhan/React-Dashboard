import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { navLinkStyle } from './Navbar'

export const Products = () => {
  return (
    <>
        <input type='search' placeholder='search-product' />
        <nav className='secondary-nav'>
            <NavLink style={navLinkStyle} to='featured' >Featured</NavLink>
            <NavLink style={navLinkStyle} to='new' >New</NavLink>
        </nav>
        <Outlet />
    </>
  )
}
