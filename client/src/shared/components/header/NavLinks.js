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
                <NavLink to="/research">RESEARCH</NavLink>
            </li>
            <li>
                <NavLink to="/publications">PUBLICATIONS</NavLink>
            </li>
            <li>
                <NavLink to="/people">PEOPLE</NavLink>
            </li>
        </ul>
    );
}

export default NavLinks;