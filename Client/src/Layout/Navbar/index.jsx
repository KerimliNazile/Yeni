import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBasketShopping } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import './index.scss'
const Navbar = () => {
    return (
        <>
            <nav>
<div className="MainNav">
    <ul id='Nav'>
        <li><NavLink to={"/home"}>Home</NavLink></li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
        <li><NavLink to={"/add"}>Add Page</NavLink></li>
        <li><NavLink to={"/basket"}><FaBasketShopping /></NavLink></li>
        <li><NavLink to={"/wishlist"}><GoHeartFill /></NavLink></li>
    </ul>
</div>
            </nav>
        </>
    )
}

export default Navbar