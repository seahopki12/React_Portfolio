import React from "react";
import Header from "../../components/Header";
import { Col, Row, Container } from "../../components/Grid";
import Image from "react-bootstrap/Image";
import "./style.css"
import profile from "../../documents/profile_picture_2.jpg";

function About() {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col size="md-6">
                        <Image src={profile} alt="Headshot" className="about-image" thumbnail roundedCircle/>
                    </Col>
                    <Col size="md-6">
                        <p>I am a full-stack web developer with a background in integrated audio/visual systems. 
                            I have recently completed a 6-month Full Stack Web Development Coding Bootcamp
                            where I became familiar with the fundamentals of web development and focused on learning
                            a variety of modern technologies, including the MERN stack. I am a passionate worker 
                            with a knack for learning and problem-solving.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;