import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css"

function Footer() {
    return (
        <Card className="text-center" id="pinned">
            <Card.Footer className="text-muted" id="color-theme">Sean Hopkins Portfolio</Card.Footer>
        </Card>
    );
}

export default Footer;