import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100} />
                <div className="flexCenter h-menu">
                    <a href="#companies">Our Associations</a>
                    <a href="#Franchise">Open a Franchise</a>
                    <a href="#residencies">Real Estate</a>
                    <a href="#contact-us">Contact Us</a>
                    <a href="#get-started">Get Started</a>
                    <button className="button">
                        <a href="#">Contact</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Header;
