import React from "react";
import './Companies.css'
const Companies = () => {
    return (
        <section className="c-wrapper">

            <div id="companies" className="paddings innerWidth flexCenter c-container">
                <div className="headingcompany">
                    Companies Associated with Us
                </div>
                <img src="./prologis.png" alt="" />
                <img src="./tower.png" alt="" />
                <img src="./equinix.png" alt="" />
                <img src="./realty.png" alt="" />
            </div>
        </section>
    );
};

export default Companies;