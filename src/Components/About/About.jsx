import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './About.scss';

export default function About() {
    return (
        <div className="about">
            <NavBar />
                <div className="about__details">
                    <div className="about__details-title"><span>-About-</span></div>
                    <div className="about__details-message"><span>Plant lives matter. Period.</span></div>
                </div>
            <Footer />
        </div>
    )
}
