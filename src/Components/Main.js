import React, { useState } from 'react';

import Main_Section1 from './MainSection1';
import ContactSection from './ContactSection';


export default function Main(props) {

    return (
        <div id="main">
            < Main_Section1 darkScene={props.darkScene} windowWidth={props.windowWidth}/>
            < ContactSection darkScene={props.darkScene}/>
        </div>
    )
}