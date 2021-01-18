import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="footer fixed-bottom bg-dark">
                <div class="row m-3">
                    {/* <!--github icon and link--> */}
                    <span class="m-auto m-3">
                        <a href="https://github.com/lindsaymorris813" target="_blank" rel="noreferrer"><i class="fab fa-github-square fa-2x"></i></a>
                    </span>
                    {/* <!--linkedin icon and link-- > */}
                    <span class="m-auto m-3">
                        <a href="http://www.linkedin.com/in/lindsaymorris813" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in fa-2x"></i></a>
                    </span>
                    {/* <!--instagram icon and link-- > */}
                    <span class="m-auto m-3">
                        <a href="http://www.instagram.com/ughhhhstop" target="_blank" rel="noreferrer"><i class="fab fa-instagram-square fa-2x"></i></a>
                    </span>
                </div>
        </footer >
    )
}

export default Footer;