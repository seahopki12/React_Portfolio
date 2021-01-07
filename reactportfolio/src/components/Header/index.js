import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css"

function Header() {

    return (
        <div>
            <h1 className="center">Sean Hopkins</h1>
            <h2 className="center">Full-Stack Web Developer</h2>
            <Navbar id="color-theme">
                <Nav className="justify-content-center mr-auto" style={{ flex: 1 }}>
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;