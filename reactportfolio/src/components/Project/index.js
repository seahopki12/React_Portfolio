import React from "react";
import Image from "react-bootstrap/Image";
import { MDBMask, MDBView, MDBCol } from "mdbreact";
import "./style.css"

function Project(props) {
    return (
        <MDBCol md="6" className="center">
            <h3><a href={props.git} target="_blank" rel="noreferrer">{props.name}</a></h3>
            <a href={props.app} target="_blank" rel="noreferrer" className="snap">
                <MDBView hover>
                    <Image
                        src={props.gif}
                        alt={props.name}
                        className="d-block mx-auto img-fluid image-crop"
                        thumbnail
                    />
                    <MDBMask className="flex-center" overlay="grey-strong">
                        <p className="white-text">Visit</p>
                    </MDBMask>
                </MDBView>
            </a>
        </MDBCol>
    )
}

export default Project;
