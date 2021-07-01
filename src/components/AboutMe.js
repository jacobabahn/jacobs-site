import React from 'react'
import Fade from 'react-reveal/Fade'

import './AboutMe.css'
import me from '../me.jpg'

const AboutMe = (props) => {
    return (
        <div className="page">
            <Fade left>
                <h1 className="heading">Who am I?</h1>
                <div className="content">
                    <img className="me" src={me} />
                    <p className="ptext">
                        I am a student studying Computer Science at Southern Adventist University. 
                        My hobbies include working out, following basketball and football, cars, and of course, technology.
                        Some development technologies I've worked with are Python, JavaScript, C++, Java, and React. <br/> <br/>
                        Feel free to contact me at jacobabahn@southern.edu!
                    </p>
                </div>
            </Fade>
        </div>
    )
}

export default AboutMe