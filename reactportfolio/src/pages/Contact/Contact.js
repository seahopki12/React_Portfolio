import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css"

function Contact() {
    return (
        <div>
            <div className="center">
                <Header />
                <h1>Contact</h1>
                <ul>
                    <li><a href="https://github.com/seahopki12" target="_blank" rel="noreferrer">GitHub</a></li>
                    <li><a href="https://linkedin.com/in/seahopki12" target="_blank" rel="noreferrer">Linkedin</a></li>
                    <li>
                        <span>Email Address: </span><a href="mailto:seahopki12@gmail.com">seahopki12@gmail.com</a>
                    </li>
                    <li>
                        <span>Phone Number: </span><a href="tel:17573278855">(757)327-8855</a>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;