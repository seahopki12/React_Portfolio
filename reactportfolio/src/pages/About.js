import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Col, Row, Container } from "../components/Grid";

function About() {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col size="md-12"><h1>About Me</h1></Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <img src="./documents/profile_picture_2.jpg" alt="Profile" width="100%" />
                    </Col>
                    <Col size="md-6">
                        <p id="body">I am a full-stack web developer based in Washington, D.C. I started my career as a
                        Audio/Visual
                        specialist for the Smithsonian Institution in Washington, D.C. From there, I moved into the
                        intergrated AV
                        system industry working as a service technician. This role set me up for my knowledge and
                        experience in the
                        IT/programming industry.</p>
                    </Col>
                </Row>
                <Row></Row>

            </Container>
            <Footer />
        </div>
    )
}

export default About;