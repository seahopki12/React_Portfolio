import React from "react";
import { Col, Row } from "../../components/Grid";
import "./style.css"

function Project(props) {
    return (
        <Col size="md-6">
            <Row>
                <Col size="md-12">
                    <h3 className="center"><a href={props.git} target="_blank" rel="noreferrer">{props.name}</a></h3>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col size="md-12" style={{margin: "auto"}}>
                    <a href={props.app} target="_blank" rel="noreferrer">
                        <img
                            src={props.gif}
                            alt={props.name}
                            className="d-block mx-auto img-fluid w-75"
                        />
                    </a>
                </Col>
            </Row>
        </Col>
    )
}

export default Project;
