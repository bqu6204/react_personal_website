import React, { useState } from 'react';
import '../Styles/Nav/Nav.css';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Nav(props) {
    const [navActive, setNavActive] = useState(false);

    function toggleNav() {
        setNavActive(prevNavActive => !prevNavActive)
    }

    return (
        <nav className={props.darkScene === true ? 'dark' : ''}>

            {props.windowWidth < 1024 && <GiHamburgerMenu id="navButton" size="20" color={props.darkScene && "white"} onClick={toggleNav} />}

            <div id="navLinkContainer" className={`${navActive ? 'active' : ''} ${props.darkScene === true ? 'dark' : ''}`}>
                <div className="avatar"></div>
                <h1 id="name">E-Song Yeh</h1>
                <ul>
                    <li><a className={props.darkScene === true ? 'dark' : ''} href="#">HOME</a></li>
                    <li><a className={props.darkScene === true ? 'dark' : ''} href="#">SKILL</a></li>
                    <li><a className={props.darkScene === true ? 'dark' : ''} href="#">EXPERIENCE</a></li>
                    <li><a className={props.darkScene === true ? 'dark' : ''} href="#">CONTACT</a></li>
                </ul>
            </div>

            <div id="toggleLightDarkMode" className={props.darkScene === true ? 'dark' : ''} onClick={props.toggleLightDarkMode}>
                <i id="indicatorLightDarkMode"></i>
            </div>
        </nav>
    )
}