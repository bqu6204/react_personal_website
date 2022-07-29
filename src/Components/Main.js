import React, { useState } from 'react';

import Main_Section1 from './MainSection1';
import Contact_Section from './Contact_Section'


export default function Main(props) {

    return (
        <div id="main">
            < Main_Section1 darkScene={props.darkScene} windowWidth={props.windowWidth}/>
            < Contact_Section darkScene={props.darkScene}/>
        </div>
    )
}