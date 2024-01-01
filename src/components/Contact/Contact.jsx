import React from 'react';
import './Contact.css';

const AdvancedContact = () => {
    return (
        <div className="advanced-contact-wrapper">
            <div className="advanced-contact-container">
                <div className="contact-left">
                    <h1 className="orange-text">Contact Us</h1>
                    <p className="primary-text">We're here to assist you. Feel free to reach out through various channels.</p>

                    <div className="contact-options">
                        <div className="contact-option">
                            <div className="icon">📞</div>
                            <div className="option-details">
                                <span className="primary-text">Call Us</span>

                            </div>
                            <a href="tel:+919050482008" className="contact-button">
                                Call now
                            </a>
                        </div>

                        <div className="contact-option">
                            <div className="icon">✉️</div>
                            <div className="option-details">
                                <span className="primary-text">Email Us</span>

                            </div>
                            <a href="mailto:aayusharora2510@gmail.com" className="contact-button">
                                Email now
                            </a>
                        </div>

                        <div className="contact-option">
                            <div className="icon">📱</div>
                            <div className="option-details">
                                <span className="primary-text">WhatsApp</span>

                            </div>
                            <a href="https://wa.me/9050482008" target="_blank" rel="noopener noreferrer" className="contact-button">
                                Chat now
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-right">
                    <div className="image-container">
                        <img src="/contact.png" alt="Contact" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvancedContact;
