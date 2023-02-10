// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

export default function Header(){
    return(
        <header className="header">
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