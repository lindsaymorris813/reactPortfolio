import React, { Component } from "react";
import Project from "../components/Project/Project";
import "./style.css";
import projects from "../projects.json";

class Portfolio extends Component {
    state = {
        projects
    }
    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    {this.state.projects.map(project => (
                        <Project 
                        title={project.title}
                        key={project.title}
                        image={project.image}
                        usage={project.usage}
                        technologies={project.technologies}
                        deployedSite={project.deployedSite}
                        gitHubRepo={project.gitHubRepo}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Portfolio;