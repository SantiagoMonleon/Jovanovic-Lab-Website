import React from 'react';

import Card from '../../../shared/components/UIELements/Card'
import { Link } from 'react-router-dom';

import './ResearchTopic.css';

const ResearchTopic = (props) => {
    const cardStyle = {
        width: "45%",
        marginRight: "5%",
        height: "auto",
        minHeight: "100px",
        overflow: "hidden",
        textDecoration: "none",
        color: "black"
    }
    return (
        <Link to={props.to} style={cardStyle}>
            <Card>
                {props.intro}
            </Card>
        </Link>
    );
}

export default ResearchTopic;