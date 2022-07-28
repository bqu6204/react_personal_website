import React, { useState , useEffect } from 'react';
import './Styles/App/App.css';
import Nav from './Components/Nav.js';
import Main from './Components/Main.js'

export default function App() {
  const [darkScene, setDarkScene] = useState(false);
  const [mainSection1_rotateDegree ,setMainSection1_rotateDegree] = useState(180);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
      function watchWindowWidth() {
          setWindowWidth(window.innerWidth)
      }
      console.log(windowWidth);
      window.addEventListener('resize', watchWindowWidth);
      return function () {
          window.removeEventListener('resize', watchWindowWidth);
      }
  }, [windowWidth])

  function toggleLightDarkMode(){
    setDarkScene(prevDarkScene => !prevDarkScene);
    setMainSection1_rotateDegree(prevState => prevState + 180);
    document.getElementById('testdiv').style.transform= `rotate(${mainSection1_rotateDegree}deg)`;
  }


  return (
    <>
      <Nav darkScene={darkScene} toggleLightDarkMode={toggleLightDarkMode} windowWidth={windowWidth}/>
      <Main darkScene={darkScene} windowWidth={windowWidth}/>
    </>

  );
}
