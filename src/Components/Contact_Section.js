import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import '../Styles/ContactSection/ContactSection.css';

export default function Contact_Section(props) {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>

    return (
        <div>
            <button>phone</button>
            <button>email</button>
            <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} mapContainerClassName="map-container"></GoogleMap>
        </div>
    )
}