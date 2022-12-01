import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import Landing from './components/landing.js';
import Main from './components/main.js';
import Typewriter from 'typewriter-effect';


function App() {

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;
  
  
    const [authenticated, setAuthenticated] = useState(false);

    return (
        <div>
            {isMobile ? 
                <div className="mobile">
                    <div className="mobileheader">
                    <Typewriter
                        options={{
                            autoStart: true,
                            delay: 25,
                            cursor: ""

                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString("Sorry, but Will Toth's personal portfolio currently does not support mobile.")
                                .start();
                        }}
                    />
                    <br/>
                    <Typewriter
                        options={{
                            autoStart: true,
                            delay: 25,
                            cursor: ""

                        }}
                        onInit={(typewriter) => {
                            typewriter.pauseFor(3000).typeString("Please open in a web browser :)")
                                .start();
                        }}
                    />
                    </div>
                </div> 
            : 
                <div>
                    {authenticated ? <Main/> : <Landing setAuthenticated={setAuthenticated}/>}
                </div>}
        </div>
    );
}

export default App;
