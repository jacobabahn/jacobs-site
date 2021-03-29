import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    heading: {
        fontSize: "60px",
        padding: "2rem 5rem",
        color: "#45A29E"
    }
})

const AboutMe = (props) => {
    const classes = useStyles()
    return (
        <div>
            <h1 className={classes.heading}>Who am I?</h1>
            <p>I am a student studying Computer Science at Southern Adventist University.</p>
        </div>
    )
}

export default AboutMe