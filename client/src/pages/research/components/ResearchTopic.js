import React from 'react';

import Card from '../../../shared/components/UIELements/Card'
import { Link } from 'react-router-dom';

import './ResearchTopic.css';

const ResearchTopic = (props) => {
    const cardStyle = {
        marginBottom: "20px",
        marginTop: "10px"
    }
    return (
        <Link to={props.to}>
            <Card style={cardStyle}>
                {props.intro}
            </Card>
        </Link>
    );
}

export default ResearchTopic;