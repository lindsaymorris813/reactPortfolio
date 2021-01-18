import React from "react";
import Project from "../components/Project/Project";
import "./style.css";

function Portfolio() {

    return (
        <div className="container">
            <h2 className="m-3">Portfolio</h2>
            <div className="container">
                projects.map(project => {
                    <Project 
                    title=project.title/>
                }
            </div>
        </div>
    )
}

export default Portfolio;