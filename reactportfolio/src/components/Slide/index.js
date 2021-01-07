import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css"

function Slide () {
    return (
        <Carousel className="resize">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./documents/wish_list.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./documents/vacation_planner.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./documents/weather_dashboard.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slide;