import React from "react";
import data from "../../utils/slider2.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Franchise.css";
import { sliderSettings } from "../../utils/common";

const Franchise = () => {
    const preWritedText = "Please don't remove and answer this questions to get qualified for the franchise \n 1. Business Experience  \n 2. Preferred Location and Land Size \n 3.Current Profession(if any) and if holding any other franchise \n 4. Contact Details \n | YOU CAN MENTION ALL QUESTION AND DOUBTS BELOW IF QUALIFIED YOU'LL BE CONTACTED BY OUR CONSULTANT SOON | ";

    return (
        <div id="Franchise" className="r-wrapper">
            <div className="paddings innerWidth f-container">
                <div className="flexColStart r-head">
                    <span className="orangeText">Setup your Business</span>
                    <span className="primaryText">Open Popular Franchise</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SlideNextButton />
                    {/* slider */}
                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="flexColStart f-card">
                                <img src={card.image} alt="home" className="imagecard" />

                                <span className="secondaryText r-price">
                                    <span style={{ color: "orange" }}>₹</span>
                                    <span>{card.price}</span>
                                </span>
                                <span className="primaryText">{card.name}</span>
                                <span className="secondaryText">{card.detail}</span>
                                <EmailButton preWritedText={preWritedText} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

const EmailButton = ({ preWritedText }) => {
    return (
        <a href={`mailto:aayusharora2510@gmail.com?subject=Franchise Inquiry&body=${encodeURIComponent(preWritedText)}`}>
            <button className="r-emailButton">Email</button>
        </a>
    );
};

const SlideNextButton = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()} className="r-prevButton">
                &lt;
            </button>
            <button onClick={() => swiper.slideNext()} className="r-nextButton">
                &gt;
            </button>
        </div>
    );
};

export default Franchise;
