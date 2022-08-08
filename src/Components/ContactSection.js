import React, { useMemo, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { PulseLoader } from 'react-spinners';
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

    const [isLoading, setIsLoading] = useState(false);

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
        // eslint-disable-next-line
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!isValidEmail(data.email)) return alert('Email NOT valid!');

        if (data.name && data.email && data.text) {
            setIsLoading(prevIsLoading => !prevIsLoading);
            axios.post('https://esong-react.herokuapp.com/', data)
                .then((response) => {
                    setData({
                        name: '',
                        email: '',
                        text: '',
                    });
                    setIsLoading(prevIsLoading => !prevIsLoading);
                    response.request.status === 200 && alert('Email sent!')
                });
        } else {
            alert('Form uncompleted!');
        }
    }

    return (
        <div id="contactSectionWrapper" className={props.darkScene === true ? 'dark' : ''}>
            <div id="contactInfoContainer" className={props.darkScene === true ? 'dark' : ''}>

                {/* ------------ Contact Info Start -------------- */}
                <div
                    id="contactInfoPhone"
                    className={`${props.darkScene === true ? 'dark' : ''} contactInfo`}
                    onClick={copy}>
                    0963251211</div>
                <div id="contactInfoEmail" className={`${props.darkScene === true ? 'dark' : ''} contactInfo`} onClick={copy} >bqu6204@gmail.com</div>
                <a id="contactInfoGithub" className={`${props.darkScene === true ? 'dark' : ''} contactInfo`} href="https://github.com/bqu6204/react_personal_website" target="_blank" rel="noopener noreferrer" >
                    https://github.com/bqu6204/react_personal_website
                </a>

                {/* ------------ Form Start -------------- */}
                <form className={props.darkScene === true ? 'dark' : ''}>
                    <h1 className={props.darkScene === true ? 'dark' : ''}>FORM</h1>
                    <label
                        htmlFor="name"
                        className={`${props.darkScene === true ? 'dark' : ''} ${data.name ? 'active' : ''}`}>
                        <input
                            onChange={handleInputChange}
                            name="name"
                            type="text"
                            value={data.name}
                            className={props.darkScene === true ? 'dark' : ''}>
                        </input>
                    </label>
                    <label htmlFor="email" className={`${props.darkScene === true ? 'dark' : ''} ${data.email ? 'active' : ''}`}>
                        <input
                            onChange={handleInputChange}
                            name="email"
                            type="email"
                            value={data.email}
                            className={props.darkScene === true ? 'dark' : ''}>
                        </input>
                    </label>
                    <textarea
                        onChange={handleInputChange}
                        name="text"
                        value={data.text}
                        placeholder="Emails are sent by a simple php server with SendGrid add on running on Heroku."
                        className={props.darkScene === true ? 'dark' : ''}>
                    </textarea>
                    <button onClick={handleSubmit} className={props.darkScene === true ? 'dark' : ''}>submit</button>

                    {/* loader */}
                    {isLoading && <div id="loaderContainer">
                        <PulseLoader size={30} />
                    </div>}

                </form>
            </div>

            {/* ------------ GoogleMap Start -------------- */}
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