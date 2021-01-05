import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slide from "../../components/Slide";
import "./style.css"

const Home = () => {
    return (
        <div>
            <Header />
            <h1 className="center">Sean Hopkins</h1>
            <h2 className="center">Full-Stack Web Developer</h2>
            <Slide />
            <Footer />
        </div>
    );
};

export default Home;