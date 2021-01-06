import React from "react";
import { Col, Row } from "../../components/Grid";

function Project(props) {
    return (
        <Col size="md-6">
            <Row>
                <Col size="md-12">
                    <h1><a href={props.git} target="_blank" rel="noreferrer">{props.name}</a></h1>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <a href={props.app} target="_blank" rel="noreferrer">
                        <img
                            src={props.gif}
                            alt={props.name}
                        />
                    </a>
                </Col>
            </Row>
        </Col>
    )
}

export default Project;
