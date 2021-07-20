import React from "react";
import Header from "../../components/Header";
import "./style.css"
import casual from "../../documents/casual_profile.jpg";
import Image from "react-bootstrap/Image";

const Home = () => {
    return (
        <div>
            <Header />
            <Image src={casual} alt="Casual Profile" className="home-image" roundedCircle thumbnail/>
        </div>
    );
};

export default Home;