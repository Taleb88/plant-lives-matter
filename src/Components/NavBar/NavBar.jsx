import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import HamburgerIcon from '../../images/hamburger-icon.png';
import './NavBar.scss';

class NavBar extends React.Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu left customBurgerIcon={<img src={HamburgerIcon} alt="Hamburger Menu Icon"/>}>
                <a id="home" href="/">Home</a>
                <a id="about" href="/about">About</a>
                <a id="facts" href="/facts">Facts</a>
                <a id="contact" href="/contact">Contact</a>
            </Menu>
        )
    }
}

export default NavBar;
