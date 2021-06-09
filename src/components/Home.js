import React from 'react'

// import { makeStyles } from '@material-ui/core/styles'
import computer from '../computer2.svg';
import Lottie from 'react-lottie'
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
    return (
        <div className="begText">
            <h1 className="text slight-slide-from-left">Hello, I'm <span className="specialText">Jacob</span> <br></br>
                An aspiring <span className="specialText">Software Engineer</span>
            </h1>
            
            <Lottie
                className="lottie"
                options={defaultOptions}
                height={500}
                width={500}
            />
            {/* <img src={computer} alt={computer} className={`${classes.computer} slight-slide-from-right`} /> */}

        </div>
    )
}

export default Home