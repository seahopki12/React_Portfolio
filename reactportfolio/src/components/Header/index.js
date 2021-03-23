import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {  Link } from "react-router-dom";
import "./style.css"

function Header() {

    return (
        <div>
                <h1 className="center">Sean Hopkins</h1>
                <h2 className="center">Full-Stack Web Developer</h2>
                <Navbar id="color-theme">
                    <Nav className="justify-content-center mr-auto" style={{ flex: 1 }}>
                        <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                        <Nav.Link><Link to="about">About</Link></Nav.Link>
                        <Nav.Link><Link to="/projects">Projects</Link></Nav.Link>
                        <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                    </Nav>
                </Navbar>
        </div>
    );
}

export default Header;