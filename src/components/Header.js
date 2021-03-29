import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Fade from '@material-ui/core/Fade';
// import JB from '../jblogo.jpg';
import computer from '../computer2.svg';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=> ({
    appbar: {
        color: "#1f2833",
        backgroundColor: "#45A29E",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        boxShadow: "",
    },
    tabs: {
        textTransform: "none",
        fontSize: "1.1rem",
        fontWeight: "bold",
        borderRadius: "15px",
        marginLeft: "2rem",
        marginRight: "2rem",
        transition: ".2s",
        "&:hover": {
            color: "white"
          },
    },
  }))


const Header = (props) => {
    const classes = useStyles();

    return(
        <div>
            <AppBar className={classes.appbar}>
                <Toolbar>
                    {/* <img src={JB} alt="JB logo" style={{height: "4rem"}} /> */}
                    <Tabs >
                        <Tab className={classes.tabs} label="Home">Home</Tab>
                        <Tab className={classes.tabs} label="About Me">About Me</Tab>
                        <Tab className={classes.tabs} label="Contact Me">Contact Me</Tab>
                    </Tabs>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    )
}

export default Header