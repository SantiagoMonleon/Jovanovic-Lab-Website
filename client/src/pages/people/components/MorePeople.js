import React from 'react';
import { Link } from 'react-router-dom';

import './MorePeople.css';

const MorePeople = () => {
    return (
        <Link to="/people/former" className="former-btn">Former Students</Link>
    );
}

export default MorePeople;