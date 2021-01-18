import React from "react";
import "./style.css";

function Contact() {
    return (
        <div className="container">
            <h2 className="m-3">Contact</h2>
            {/* <!--form--> */}
            <div class="container" id="formContainer">
                <form>
                    {/* <!--Name--> */}
                    <div class="form-group">
                        <label for="formGroupExampleInput">Name</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name" />
                    </div>
                    {/* <!--Email--> */}
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    {/* <!--Message Text Area--> */}
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                    </div>
                    {/* <!--Submit button--> */}
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;