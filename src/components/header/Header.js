// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as React from 'react'
// import { useGesture } from '@use-gesture/react'
// import { animated, useSpring, useSprings } from '@react-spring/web'
import { NavLink } from "react-router-dom"
// import '../header/header.scss'

export default function Header(){
    return(
        <header className="header">
            <h1 className='fiona-header'>Fiona Nicdao</h1>
            <div className="dropdown">
                <button className="dropdown-menu-button">
                    <i className="menu-icon fa-solid fa-bars"></i>
                </button>
                <nav>
                    <ul className="dropdown-content">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/aboutme'>About Me</NavLink>
                        <NavLink to='/work'>Portfolio</NavLink>
                        <NavLink to='/contact'>Contact Me</NavLink>
                        <NavLink to='/resume'>Resume</NavLink>
                    </ul>  
                </nav>
            </div>

        </header>
    )
}