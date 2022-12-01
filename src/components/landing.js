import Typewriter from 'typewriter-effect';
import {useEffect} from 'react';

export default function Landing(props) {

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true)
    }, [])

    const detectKeyDown = (e) => {
        props.setAuthenticated(true);
    }

    return (
        <div className="auth-parent">
            <div className="panel">
                <div className="paneltext">
                    <Typewriter
                        options={{
                            autoStart: true,
                            delay: 25,
                            cursor: ""

                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('William Toth OS').start();
                        }}
                    />
                    <Typewriter
                        options={{
                            autoStart: true,
                            delay: 20,
                            cursor: ""

                        }}
                        onInit={(typewriter) => {
                            typewriter.pauseFor(750).typeString("Copyright (c) 2022, All Rights Reserved")
                                .start();
                        }}
                    />
                    <Typewriter
                        options={{
                            autoStart: true,
                            delay: 25,
                            cursor: ""

                        }}
                        onInit={(typewriter) => {
                            typewriter.pauseFor(1900).typeString("Version 1.0")
                                .start();
                        }}
                    />
                    <br />
                    <Typewriter
                        options={{
                            autoStart: true,
                            delay: 23,
                            cursor: ""

                        }}
                        onInit={(typewriter) => {
                            typewriter.pauseFor(2600).typeString("Battery pack: 97% ok")
                                .start();
                        }}
                    />
                    <Typewriter
                        options={{
                            autoStart: true,
                            delay: 23,
                            cursor: ""

                        }}
                        onInit={(typewriter) => {
                            typewriter.pauseFor(3200).typeString("Memory Test: 8192 ok")
                                .start();
                        }}
                    />
                    <Typewriter
                        options={{
                            autoStart: true,
                            delay: 23,
                            cursor: ""

                        }}
                        onInit={(typewriter) => {
                            typewriter.pauseFor(4000).typeString("Initializing").pauseFor(200)
                            .typeString(".").pauseFor(300)
                            .typeString(".").pauseFor(300)
                            .typeString(".").pauseFor(300)
                            .changeDelay(2)
                            .typeString(" DONE")
                                .start();
                        }}
                    />
                    <br />
                    <Typewriter
                        options={{
                            autoStart: true,
                            delay: 23,
                            cursor: ""

                        }}
                        onInit={(typewriter) => {
                            typewriter.pauseFor(5900).typeString("You are about to enter Will Toth's personal portfolio").start();
                        }}
                    />
                    <Typewriter
                        options={{
                            autoStart: true,
                            delay: 25,
                            cursor: ""

                        }}
                        onInit={(typewriter) => {
                            typewriter.pauseFor(7600).typeString("Press any key to start system").start();
                        }}
                    />
                </div>
            </div>
        </div>
    )
}