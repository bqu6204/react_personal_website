import React, { useState } from 'react';
import '../Styles/MainSection1/MainSection1.css';
import { ReactComponent as SvgTest } from '../Images/svgtest.svg';

export default function MainSection1(props) {

    return (
        <div className="mainSection1Wrapper">
            <div className={`${props.darkScene && 'dark'}  mainSection1Background`} id="testdiv"></div>
            <div id="mainSection1TextImageContainer">
                <div id="mainSection1Text">
                    <h1 >Hi, welcome to my personal website!!</h1>
                    <a href="#" className={props.darkScene && 'dark'}>CONTACT ME</a>
                </div>

                {props.windowWidth > 1024 &&
                <SvgTest id="mainSection1Svg" />
                }

            </div>

        </div>
    )
}