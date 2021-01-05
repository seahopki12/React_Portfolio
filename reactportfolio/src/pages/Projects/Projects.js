import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Col, Row } from "../../components/Grid";

function Projects() {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col size="md-6">
                        <Row>
                            <Col size="md-12">
                                <h1><a href="https://github.com/seahopki12/holiday_wish_list" target="_blank" rel="noreferrer">Holiday Wish List Tracker</a></h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-12">
                                <a href="https://project-two-gwu.herokuapp.com/" target="_blank" rel="noreferrer">
                                    <img
                                        src="./documents/Holiday Wish List.gif"
                                        alt="Holiday Wish List"
                                    />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col size="md-6">
                        <Row>
                            <Col size="md-12">
                                <h1><a href="https://github.com/seahopki12/vacation_planner" target="_blank" rel="noreferrer">Vacation Planner</a></h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-12">
                                <a href="https://seahopki12.github.io/vacation_planner/" target="_blank" rel="noreferrer">
                                    <img
                                        src="./documents/Vacation Planner.gif"
                                        alt="Vacation Planner"
                                    />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <Row>
                            <Col size="md-12">
                                <h1><a href="https://github.com/seahopki12/weather_dashboard" target="_blank" rel="noreferrer">Weather Dashboard</a></h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-12">
                                <a href="https://seahopki12.github.io/weather_dashboard/" target="_blank" rel="noreferrer">
                                    <img
                                        src="./documents/Weather Dashboard.gif"
                                        alt="Weather Dashboard" />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col size="md-6">
                        <Row>
                            <Col size="md-12">
                                <h1><a href="https://github.com/seahopki12/password_generator" target="_blank" rel="noreferrer">Password Generator</a></h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-12">
                                <a href="https://seahopki12.github.io/password_generator/" target="_blank" rel="noreferrer">
                                    <img
                                        src="./documents/Password Generator.gif"
                                        alt="Password Generator"
                                    />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <Row>
                            <Col size="md-12">
                                <h1><a href="https://github.com/seahopki12/work_day_scheduler" target="_blank" rel="noreferrer">Work Day Scheduler</a></h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-12">
                                <a href="https://seahopki12.github.io/work_day_scheduler/" target="_blank" rel="noreferrer">
                                    <img
                                        src="./documents/Work Day Scheduler.gif"
                                        alt="Work Day Scheduler"
                                    />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col size="md-6">
                        <Row>
                            <Col size="md-12">
                                <h1><a href="https://github.com/seahopki12/burger" target="_blank" rel="noreferrer">Eat-Da-Burger!</a></h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-12">
                                <a href="https://gentle-wave-77495.herokuapp.com/" target="_blank" rel="noreferrer">
                                    <img
                                        src="./documents/Eat-Da-Burger!.gif"
                                        alt="Eat-Da-Burger!"
                                    />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Projects;