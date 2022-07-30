import React, { useMemo, useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import mapLightMode from './mapLightMode';
import mapDarkMode from './mapDarkMode';

import '../Styles/ContactSection/ContactSection.css';

export default function ContactSection(props) {
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

    return (
        <div id="contactSectionWrapper">
            <div id="contactInfoContainer">
                <div className="contactInfo">
                    <h6>phone:</h6>
                    <h3>0963251211</h3>
                </div>
                <div className="contactInfo">
                    <h6>email:</h6>
                    <h3>bqu6204@gmail.com</h3>
                </div>
                <div className="contactInfo">
                    <a href="https://github.com/bqu6204/react_personal_website" target="_blank" >
                        <h6>GitHub:</h6>
                        <h3>https://github.com/bqu6204/react_personal_website</h3>
                    </a>
                </div>
                <form>
                    <input name="name" type="text" placeholder="Name"></input>
                    <input name="email" type="email" placeholder="Email"></input>
                    <textarea name="text" placeholder="Text..."></textarea>
                    <button>submit</button>

                </form>
            </div>
            <GoogleMap
                zoom={13}
                center={center}
                options={{ ...options,styles: props.darkScene === true ? mapDarkMode : mapLightMode  }}
                mapContainerClassName="map-container">
                <Marker position={{ lat: 25.0148739, lng: 121.5343291 }} />
            </GoogleMap>
        </div >
    )
}