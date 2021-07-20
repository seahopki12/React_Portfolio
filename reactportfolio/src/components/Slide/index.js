import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css"
import wishImg from "../../documents/wish_list.png";
import vacationImg from "../../documents/vacation_planner.png";
import weatherImg from "../../documents/weather_dashboard.png";

function Slide () {
    return (
        <Carousel className="resize">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={wishImg}
                    alt="Wish List Tracker"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={vacationImg}
                    alt="Vacation Planner"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={weatherImg}
                    alt="Weather Dashboard"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slide;