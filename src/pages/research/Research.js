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
                <h1>Research Overview</h1>
                <hr />
                <ResearchMain />
                <h1>Research Topics</h1>
                <hr style={{marginBottom: "20px"}}/>
                <div className="row">
                    <ResearchTopic to="/research/icore" intro="Therapeutic Blood Processing" />
                    <ResearchTopic to="/research/thermocatalytic" intro="Microscale-based Thermocatalytic Processing" />
                </div>
                <div className="row">
                    <ResearchTopic to="/research/glow-discharge" intro="Microscale-based Non-thermal Glow DischargeProcessing" />
                    <ResearchTopic to="/research/lamina-plate" intro="Lamina-Plate Biochemical Processing" />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Research;