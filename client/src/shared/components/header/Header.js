import React from 'react';

import '../../styles/Header.css';

const Header = (props) => {
  return(
    <header className="main-header">
        {props.children}
    </header>
  );
}

export default Header;