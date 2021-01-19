import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/NavLinks.css';

const NavLinks = (props) => {
    return(
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>HOME</NavLink>
            </li>
            <li>
                <NavLink to="/publications">PUBLICATIONS</NavLink>
            </li>
            <li>
                <NavLink to="/media">MEDIA</NavLink>
            </li>
            <li>
                <NavLink to="/people">PEOPLE</NavLink>
            </li>
            <li>
                <NavLink to="/admin">ADMIN</NavLink>
            </li>
        </ul>
    );
}

export default NavLinks;