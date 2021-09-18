import React from 'react'

import "./Projects.css"
import CardProj from './CardProj';
import prsim from '../LRUExample.png'
import me from '../me.jpg'


const Projects = () => {
    return(
        <div className="projPage" id="proj">
            <div className="container">
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
                        description="Generates a song after an artist is inputted, then gives the option to play the song. Developed with Python"
                        // img={me}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects