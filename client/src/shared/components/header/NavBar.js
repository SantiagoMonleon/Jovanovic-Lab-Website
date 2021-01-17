import React, { useState} from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';

import '../../styles/NavBar.css';

const NavBar = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true);
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false);
    }

    return(
        <React.Fragment>
        {drawerIsOpen ? (<Backdrop onClick={closeDrawer}/>) : null}
        {drawerIsOpen && <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
            <nav className="main-nav-drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>}

        <Header>
            <button className="main-nav-menu-btn" onClick={openDrawer}>
                <span />
                <span />
                <span />
            </button>
            <h1 className="main-nav-title">
                <Link to="/">Jovanovic Lab</Link>
            </h1>
            <nav className="main-nav-header">
                <NavLinks />
            </nav>
        </Header>
        </React.Fragment>
    );
}

export default NavBar;