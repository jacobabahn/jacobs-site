import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import computer from '../computer2.svg';


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
        height: "100%",
    },
    computer: {
        height: "20rem",
        position: "absolute",
        right: "15%",
        top: "15rem",
        "&:hover": {
            transform: "rotate(360deg)",
            transition: "all 1s ease-in-out 0s",
        }
    }
})

const Home = () => {
    const classes = useStyles()
    return (
        <div className={classes.begText}>
            <h1 className={`${classes.text} slight-slide-from-left`}>Hello, I'm <span className={classes.specialText}>Jacob</span> <br></br>
                An aspiring <span className={classes.specialText}>Software Engineer</span>
            </h1>
            <img src={computer} alt={computer} className={`${classes.computer} slight-slide-from-right`} />
        </div>
    )
}

export default Home