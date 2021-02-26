import React from 'react';

import './PublicationHolder.css';

const PublicationHolder = (props) => {
    return (
        <div className="pubs-holder">
            {props.children}
        </div>
    );
}

export default PublicationHolder;

