import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../resources/zidioconnectlogo.png';
import '../styles/header.css';

const Header = (props) => {
    const [activePage, ] = useState(props.activePage);
    useEffect(() => {
        const navLinks = document.querySelectorAll(".navLink");
        navLinks.forEach((link) => {
            if (link.textContent.toLowerCase() === activePage.toLowerCase()) {
                link.classList.add("activeNavLink");
                console.log(link.textContent);
            } else {
                link.classList.remove("activeNavLink");
            }
        });
    });

    return (
        <nav>
            {/* Company Logo */}
            <span id="logoSpan">
                <Link to="/"><img src={logo} alt="Logo" width={200} /></Link>
            </span>

            {/* Hamburger Menu for mobile */}
            
            <input type='checkbox' name='hamburgerMenuButton' id='hamburgerMenuButton' hidden />
            <div id="hamburgerDiv">
                <label htmlFor="hamburgerMenuButton" id="hamburgerMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div id="navRightSide">
                {/* Navigation bar */}
                <ul id="mainNavLinks">
                    <Link to="/" className="navLink"><li>Home</li></Link>
                    <Link to="/jobs" className="navLink"><li>Jobs</li></Link>
                    <Link to="/internships" className="navLink"><li>Internships</li></Link>
                    <Link to="/compete" className="navLink"><li>Compete</li></Link>
                </ul>

                {/* Login options */}
                <span id="accounting">
                    <Link to="/login" id="loginButton">Login</Link>
                    <Link to="/register" id="registerButton">Register</Link>
                </span>

                {/* Logo actions */}

                {/* <ul>
                <Link ><li>Notifications</li></Link>
                <Link to={"/account/"+3}><li>My Account</li></Link>
            </ul> */}


            </div>

        </nav>

    );

}
export default Header;