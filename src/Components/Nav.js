import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import '../Styles/Nav/Nav.css';

export default function Nav(props) {
    const [navActive, setNavActive] = useState(false);

    function toggleNav() {
        setNavActive(prevNavActive => !prevNavActive);
    }

    return (
        <nav className={props.darkScene === true ? 'dark' : ''}>

            {props.windowWidth < 1024 && <GiHamburgerMenu id="navButton" size="20" color={props.darkScene && "white"} onClick={toggleNav} />}

            <div id="navLinkContainer" onClick={toggleNav} className={`${navActive ? 'active' : ''} ${props.darkScene === true ? 'dark' : ''}`}>
                <div className="avatar"></div>
                <h1 id="name">E-Song Yeh</h1>
                <ul>
                    <li><AnchorLink  className={props.darkScene === true ? 'dark' : ''} href="#mainSection1Wrapper">HOME</AnchorLink></li>
                    <li><AnchorLink className={props.darkScene === true ? 'dark' : ''} href="#mainSection1Wrapper">SKILL</AnchorLink></li>
                    <li><AnchorLink className={props.darkScene === true ? 'dark' : ''} href="#mainSection1Wrapper">EXPERIENCE</AnchorLink></li>
                    <li><AnchorLink  className={props.darkScene === true ? 'dark' : ''} href="#contactSectionWrapper"> CONTACT</AnchorLink></li>
                </ul>
            </div>

            <div id="toggleLightDarkMode" className={props.darkScene === true ? 'dark' : ''} onClick={props.toggleLightDarkMode}>
                <i id="indicatorLightDarkMode"></i>
            </div>
        </nav>
    )
}