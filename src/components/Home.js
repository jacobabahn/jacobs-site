import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import computer from '../computer2.svg';
import Lottie from 'react-lottie'
import animationData from '../lotties/55932-laptop-and-man'


const useStyles = makeStyles({
    text: {
        color: "white"
    },
    specialText: {
        color: "#66FCF1"
    },
    begText: {
        fontSize: "1.5rem",
        textAlign: "left",
        marginLeft: "2rem",
        marginTop: "15rem",
        height: "90vh",
    },
    computer: {
        height: "100%",
        position: "absolute",
        right: "15%",
        top: "15rem",
        "&:hover": {
            transform: "rotate(360deg)",
            transition: "all 1s ease-in-out 0s",
        }
    },
})

const Home = () => {
    const classes = useStyles()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            // preserveAspectRatio: "xMidYMid slice"
        }
    }
    return (
        <div className={classes.begText}>
            <h1 className={`${classes.text} slight-slide-from-left`}>Hello, I'm <span className={classes.specialText}>Jacob</span> <br></br>
                An aspiring <span className={classes.specialText}>Software Engineer</span>
            </h1>
            <Lottie
                className={classes.computer}
                options={defaultOptions}
                height={500}
                width={500}
            />
            {/* <img src={computer} alt={computer} className={`${classes.computer} slight-slide-from-right`} /> */}
        </div>
    )
}

export default Home