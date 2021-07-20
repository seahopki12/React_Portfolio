import React from "react";
import Header from "../../components/Header";
import { MDBContainer, MDBRow } from "mdbreact"
import Project from "../../components/Project";
import "./style.css"
import holiday from "../../documents/Holiday Wish List.gif";
import vacation from "../../documents/Vacation Planner.gif";
import weather from "../../documents/Weather Dashboard.gif";
import password from "../../documents/Password Generator.gif";
import scheduler from "../../documents/Work Day Scheduler.gif";
import burger from "../../documents/Eat-Da-Burger.gif";
import pooler from "../../documents/Pooler Paws.gif";


function Projects() {
    return (
        <div>
            <Header />
            <h1 className="center">Projects</h1>
            <MDBContainer fluid>
                <MDBRow>
                    <Project
                        git="https://github.com/seahopki12/holiday_wish_list"
                        app="https://project-two-gwu.herokuapp.com/"
                        gif={holiday}
                        name="Holiday Wish List Tracker"
                    />
                    <Project
                        git="https://github.com/eamenatt/Pooler-Paws"
                        app="http://www.poolerpaws.com/"
                        gif={pooler}
                        name="Pooler Paws"
                    />
                </MDBRow>
                <MDBRow>
                    <Project
                        git="https://github.com/seahopki12/vacation_planner"
                        app="https://seahopki12.github.io/vacation_planner/"
                        gif={vacation}
                        name="Vacation Planner"
                    />
                    <Project
                        git="https://github.com/seahopki12/weather_dashboard"
                        app="https://seahopki12.github.io/weather_dashboard/"
                        gif={weather}
                        name="Weather Dashboard"
                    />
                </MDBRow>
                <MDBRow>
                    <Project
                        git="https://github.com/seahopki12/password_generator"
                        app="https://seahopki12.github.io/password_generator/"
                        gif={password}
                        name="Password Generator"
                    />
                    <Project
                        git="https://github.com/seahopki12/work_day_scheduler"
                        app="https://seahopki12.github.io/work_day_scheduler/"
                        gif={scheduler}
                        name="Work Day Scheduler"
                    />
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default Projects;