import React from 'react';
import NavBar from '../NavBar/NavBar';
import Logo from '../../images/i-can-t-keep-calm-plant-lives-matter.png';
import './Home.scss';

export default function Home() {
    return (
        <div className="home">
            <NavBar />
            <img src={Logo} className="home__logo" alt="Logo" />
        </div>
    )
}
