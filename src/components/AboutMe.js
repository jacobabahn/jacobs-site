import React from 'react'
import Fade from 'react-reveal/Fade'
import * as Scroll from 'react-scroll'
import { Link } from 'react-scroll'


import './AboutMe.css'
import me from '../me.jpg'
import down from '../down.png'
import { Paper, Card } from '@material-ui/core'


const AboutMe = (props) => {
    return (
        <div className="page" id="about">
            <Fade left>
                <h1 className="heading">Who am I?</h1>
                <Card className="content" elevation={11}>
                    <div className="imgDiv">
                        <img className="me" src={me} />
                    </div>
                    <div className="textContainer">
                        <p className="ptext">
                            I am a Masters student studying Computer Science. 
                            My hobbies include working out, basketball, football, cars, and of course, technology.
                            Some development languages I've worked with are Python, JavaScript(React), TypeScript, and C++. <br/> <br/>
                        </p>
                    </div>
                </Card>
            </Fade>
            <Link to="proj" smooth={true} duration={1000}>
                    <img className="down" src={down} alt="downArrow"/>
            </Link>
        </div>
    )
}

export default AboutMe
