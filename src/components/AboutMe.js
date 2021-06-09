import React from 'react'

import './AboutMe.css'
import me from '../me.jpg'

const AboutMe = (props) => {
    return (
        <div className="page">
            <h1 className="heading">Who am I?</h1>
            <div>
                <img className="me" src={me} />
                <p className="ptext">
                    I am a student studying Computer Science at Southern Adventist University. I hope to become a Software Engineer after I graduate. 
                    My hobbies include working out, following basketball and football, cars, and of course, technology.
                    Some development technologies I've worked with are Python, JavaScript, C++, Java, and React. <br/> <br/>
                    Feel free to contact me at jacobabahn@southern.edu!
                </p>
            </div>
            
        </div>
    )
}

export default AboutMe