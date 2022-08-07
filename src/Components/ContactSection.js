import React, { useMemo, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import axios from 'axios';

import mapLightMode from '../MapStyle/mapLightMode';
import mapDarkMode from '../MapStyle/mapDarkMode';

import '../Styles/ContactSection/ContactSection.css';

export default function ContactSection(props) {
    const [data, setData] = useState({
        name: '',
        email: '',
        text: '',
    })

    /* Clipboard Settings */
    function copy(event) {
        let targetText = event.target.innerText;
        navigator.clipboard.writeText(targetText);
    }

    /* Google Map Settings */
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });
    const center = useMemo(() => ({ lat: 25.0154882, lng: 121.5975271 }), []);
    const options = useMemo(
        () => ({
            disableDefaultUI: true,
            clickableIcons: false,
        }), []
    );
    if (!isLoaded) return <div>Loading...</div>

    /* Handle Form */
    function handleInputChange(event) {
        setData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        });
    }

    function isValidEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if ( !isValidEmail(data.email) ) return alert('Email NOT valid!');

        if (data.name && data.email && data.text){
            axios.post(process.env.SENDGRID_URL, data)
                .then((response) => {
                    console.log(response);
                    alert(response.data.msg)
                });
        } else {
            alert('Form uncompleted!');
        }
    }

    return (
        <div id="contactSectionWrapper" className={props.darkScene === true ? 'dark' : ''}>
            <div id="contactInfoContainer" className={props.darkScene === true ? 'dark' : ''}>
                <div id="contactInfoPhone" className="contactInfo" onClick={copy}>
                    0963251211</div>
                <div id="contactInfoEmail" className="contactInfo" onClick={copy} >bqu6204@gmail.com</div>
                <a id="contactInfoGithub" className="contactInfo" href="https://github.com/bqu6204/react_personal_website" target="_blank" rel="noopener noreferrer" >
                    https://github.com/bqu6204/react_personal_website
                </a>
                <form>
                    <input onChange={handleInputChange} name="name" type="text" placeholder="Name"></input>
                    <input onChange={handleInputChange} name="email" type="email" placeholder="Email"></input>
                    <textarea onChange={handleInputChange} name="text" placeholder="Text..."></textarea>
                    <button onClick={handleSubmit}>submit</button>
                </form>
            </div>
            <GoogleMap
                zoom={13}
                center={center}
                options={{ ...options, styles: props.darkScene === true ? mapDarkMode : mapLightMode }}
                mapContainerClassName="map-container">
                <Marker position={{ lat: 25.0148739, lng: 121.5343291 }} />
            </GoogleMap>
        </div >
    )
}