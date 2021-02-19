import React from 'react';

import ImgBox from '../../shared/components/UIELements/ImgBox';
import ResearchMain from './components/ResearchMain';
import ResearchTopic from './components/ResearchTopic'

import BannerImg from './images/JWebResearch.jpg';

import './Research.css';

const Research = () => {
    return (
        <React.Fragment>
            <ImgBox banner={BannerImg} title="Research"/>
            <div className="research-holder">
                <ResearchMain />
                <hr />
                <ResearchTopic to="/research/icore" intro="Therapeutic Blood Processing" />
                <ResearchTopic to="/research/thermocatalytic" intro="Microscale-based Thermocatalytic Processing" />
            </div>
        </React.Fragment>
    );
}

export default Research;