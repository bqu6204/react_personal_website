import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ReactComponent as SvgTest } from '../Images/svgtest.svg';

import '../Styles/MainSection1/MainSection1.css';



export default function MainSection1(props) {

    return (
        <div id="mainSection1Wrapper" className="mainSection1Wrapper">
            <div className={`${props.darkScene === true ? 'dark' : ''}  mainSection1Background`} id="testdiv"></div>
            <div id="mainSection1TextImageContainer">
                <div id="mainSection1Text">
                    <h1 >Hi, welcome to my personal website!!</h1>
                    <AnchorLink href="#contactSectionWrapper" className={props.darkScene === true ? 'dark' : ''}>CONTACT ME</AnchorLink>
                </div>

                {props.windowWidth > 1024 &&
                    <SvgTest id="mainSection1Svg" />
                }
            </div>
        </div>
    )
}