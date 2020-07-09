import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeNav = () => {

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/" exact>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/favourites">Favourites</NavLink>
                </li>
            </ul>
        </nav>  
        )};

export default HomeNav;