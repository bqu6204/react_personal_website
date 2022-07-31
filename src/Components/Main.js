import React from 'react';

import MainSection1 from './MainSection1';
import ContactSection from './ContactSection';


export default function Main(props) {

    return (
        <div id="main">
            < MainSection1 darkScene={props.darkScene} windowWidth={props.windowWidth}/>
            < ContactSection darkScene={props.darkScene}/>
        </div>
    )
}