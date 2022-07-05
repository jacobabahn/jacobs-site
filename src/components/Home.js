import React from 'react'
import * as Scroll from 'react-scroll'
import { Link } from 'react-scroll'

// import { makeStyles } from '@material-ui/core/styles'
import computer from '../computer2.svg';
import Lottie from 'react-lottie'
import down from '../down.png'
import animationData from '../lotties/55932-laptop-and-man'
import './Home.css'


const Home = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMinYMin meet"
        }
    }

    let scroll = Scroll.animateScroll

    return (
        <div className="begText">
            <div className="wrapper">
                <div id="homeCont">
                    <h1 className="animation">Hey, I'm <span>Jacob Bahn</span></h1>
                    <div className="homeCard"></div>
                    <h3 className="extra">aspiring <span>Software Engineer</span></h3>
                </div>
                    <Link to="about" smooth={true} duration={1000}>
                    <img className="down" src={down} alt="downArrow"/>
                </Link>
            </div>

            

            {/* <Lottie
                className="lottie"
                options={defaultOptions}
                height={500}
                width={500}
            /> */}
            {/* <img src={computer} alt={computer} className={`${classes.computer} slight-slide-from-right`} /> */}

        </div>
    )
}

export default Home
