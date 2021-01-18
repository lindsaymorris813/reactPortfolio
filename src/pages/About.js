import React from "react";
import "./style.css";
import image from "../assets/images/IMG_1413.jpg";
import resume from "../assets/LMResume2021.pdf";

function About() {
    return (
        <div className="container">
            <h2 className="m-3">About Me</h2>
            <div class="row">
                <div className="col-md-12">
                    <div className="media clearfix">
                        <img src={ image } alt="Lindsay Morris" class="m-2 d-flex" clear="right" id="personal-photo"/>
                            <div className="media-body text-left">
                                <p>
                                    Hi, my name is Lindsay Morris and welcome to my porfolio!
                                </p>
                                <p>
                                    Born and raised in Charlotte, North Carolina, I first started web development through customizing options
                                    on Livejournal and Myspace (what can I say? it was the early 2000's). I will complete UNC-Charlotte's Full
                                    Stack Developer Program in January 2021 and hope to continue expanding my skillset and gaining exposure to new
                                    languages to add to my repertoire.
                                </p>
                                <p>
                                    On a more personal note- I enjoy rollerskating, live music, and the cinema. I live with my cat, Beetle
                                    (think Beetlejuice), but love and enjoy spending time with all animals.
                                </p>
                                <a type="button" href={ resume } target="_blank" rel="noreferrer" id="resumeBtn" className="btn btn-secondary">Click Here to Download Lindsay's Resume</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;