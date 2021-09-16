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
                {/* <div className="content"> */}
                <Card className="content" elevation={11}>
                    <img className="me" src={me} />
                    <p className="ptext">
                        I am a student studying Computer Science. 
                        My hobbies include working out, basketball, football, cars, and of course, technology.
                        Some development technologies I've worked with are Python, JavaScript, C++, and React. <br/> <br/>
                        Feel free to contact me at jacobabahn@southern.edu!
                    </p>
                </Card>
            </Fade>
            <Link to="projects" smooth={true} duration={1000}>
                    <img className="down" src={down} alt="downArrow"/>
            </Link>
        </div>
    )
}

export default AboutMe