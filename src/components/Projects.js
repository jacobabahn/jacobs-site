import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

import "./Projects.css"
import CardProj from './CardProj';
import prsim from '../LRUExample.png'
import me from '../me.jpg'


const Projects = () => {
    return(
        <div className="page">
            <h1 className="heading">Projects</h1>
            <div id="projects">
                <CardProj
                    className="card" 
                    title="Page Replacement Sim"
                    description="A simulation of Paging's page replacement process using the methods FIFO, LIFO, and LRU"
                    img={prsim}
                    href={"http://jacobabahn.github.io/PageReplacementSimulator"}
                />
                <CardProj
                    className="card"
                    title="Random Song Generator"
                    description="Generates a song after an artist is inputted, then gives the option to play the song"
                    img={me}
                />
                <CardProj
                    className="card"
                    title="test"
                    description="l"
                    img={me}
                />
            </div>
        </div>
    )
}

export default Projects