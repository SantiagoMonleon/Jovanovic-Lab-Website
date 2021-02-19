import React from 'react';

import './PeopleImg.css';

const PersonImage = (props) => {
    return (
        <div className="image-holder">
            <img src={props.src} alt="Goran Jovanovic" className="image-holder-img"/>
        </div>
    );
}

export default PersonImage;