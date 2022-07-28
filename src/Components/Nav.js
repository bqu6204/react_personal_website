import React, { useState } from 'react';
import '../Styles/Nav/Nav.css';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Nav(props) {
    const [navActive, setNavActive] = useState(false);

    function toggleNav(){
        setNavActive( prevNavActive => !prevNavActive)
    }

    return (
        <nav className={props.darkScene && 'dark'}>

            {props.windowWidth < 1024 && <GiHamburgerMenu id="navButton" size="20" color={props.darkScene && "white"}onClick={toggleNav} />}

            <div id="navLinkContainer" className={ `${navActive ? 'active': ''} ${props.darkScene && 'dark'}`}>
                <div className="avatar"></div>
                <h1 id="name">E-Song Yeh</h1>
                <ul>
                    <li><a className={props.darkScene && 'dark'} href="#">HOME</a></li>
                    <li><a className={props.darkScene && 'dark'} href="#">SKILL</a></li>
                    <li><a className={props.darkScene && 'dark'} href="#">EXPERIENCE</a></li>
                    <li><a className={props.darkScene && 'dark'} href="#">CONTACT</a></li>
                </ul>
            </div>

            <div id="toggleLightDarkMode" className={props.darkScene && 'dark'} onClick={props.toggleLightDarkMode}>
                <i id="indicatorLightDarkMode"></i>
            </div>
        </nav>
    )
}