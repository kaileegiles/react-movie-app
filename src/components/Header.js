import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {

    function Navigation() {
        const nav = document.getElementsByClassName('navbar')[0];
        nav.classList.toggle("active");
    }

        return(
            <header>
                <div className="header-div">
                    <div className="logo">
                        <h1><Link className="logo-link" to="/">Cinedex</Link></h1>
                    </div>
                    <div className="mobile-nav" onClick={() => Navigation()}>
                        <span className="hamburger"></span>
                        <span className="hamburger"></span>
                        <span className="hamburger"></span>
                    </div>
                </div>
                <Nav />
            </header>
        )
    }

export default Header;