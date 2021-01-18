import React from "react";
import "./style.css";

function Projects({ title, key, image, usage, technologies, deployedSite, gitHubRepo }) {
    return (
        <div className="col-6">
            <div className="card m-2 shadow">
                <div className="card-header bg-dark">
                    <h3>{title}</h3>
                </div>
                <div className="card-body clearfix scroll">
                    <a href={ image } target="_blank" rel="noreferrer"><img src={image} alt={key} /></a>
                    <p>Click to View Larger</p>
                    <div className="container text-left">
                        <h5 className="mt-2"><strong>Usage:</strong></h5>
                        <p>{usage}</p>
                        <h5><strong>Technologies:</strong></h5>
                        {technologies.map(technology => (
                            <p>{technology}</p>
                        ))}
                        <a href={deployedSite} target="_blank" rel="noreferrer" id="button"
                            type="button" class="btn btn-secondary float-right m-2">Deployed Site</a>
                        <a href={gitHubRepo} target="_blank" rel="noreferrer" id="button"
                            type="button" class="btn btn-secondary float-right m-2">Git Hub Repository</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;