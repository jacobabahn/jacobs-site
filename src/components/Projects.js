import React from 'react'

import "./Projects.css"
import CardProj from './CardProj';
import prsim from '../LRUExample.png'
import constraint from '../Constraint.png'


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
                        title="Constraints Spreadsheet"
                        description="A simple spreadsheet that allows for excel-like mathematical calculations to test constraints between cells."
                        img={constraint}
                        href={"https://constraint.jacobbahn.com"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects