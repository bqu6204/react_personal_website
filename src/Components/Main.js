import React, { useState } from 'react';
import '../Styles/Main/Main.css'

import Main_Section1 from './MainSection1';
export default function Main(props) {

    return (
        <div id="main">
            < Main_Section1 darkScene={props.darkScene} windowWidth={props.windowWidth}/>
        </div>
    )
}