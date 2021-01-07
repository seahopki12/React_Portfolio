import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Row } from "../../components/Grid";
import Project from "../../components/Project";
import "./style.css"

function Projects() {
    return (
        <div>
            <Header />
            <h1 className="center">Projects</h1>
            <Container>
                <Row>
                    <Project
                        git="https://github.com/seahopki12/holiday_wish_list"
                        app="https://project-two-gwu.herokuapp.com/"
                        gif="./documents/Holiday Wish List.gif"
                        name="Holiday Wish List Tracker"
                    />
                    <Project
                        git="https://github.com/seahopki12/vacation_planner"
                        app="https://seahopki12.github.io/vacation_planner/"
                        gif="./documents/Vacation Planner.gif"
                        name="Vacation Planner"
                    />
                </Row>
                <Row>
                    <Project
                        git="https://github.com/seahopki12/weather_dashboard"
                        app="https://seahopki12.github.io/weather_dashboard/"
                        gif="./documents/Weather Dashboard.gif"
                        name="Weather Dashboard"
                    />
                    <Project
                        git="https://github.com/seahopki12/password_generator"
                        app="https://seahopki12.github.io/password_generator/"
                        gif="./documents/Password Generator.gif"
                        name="Password Generator"
                    />
                </Row>
                <Row>
                    <Project
                        git="https://github.com/seahopki12/work_day_scheduler"
                        app="https://seahopki12.github.io/work_day_scheduler/"
                        gif="./documents/Work Day Scheduler.gif"
                        name="Work Day Scheduler"
                    />
                    <Project
                        git="https://github.com/seahopki12/burger"
                        app="https://gentle-wave-77495.herokuapp.com/"
                        gif="./documents/Eat-Da-Burger!.gif"
                        name="Eat-Da-Burger!"
                    />
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Projects;