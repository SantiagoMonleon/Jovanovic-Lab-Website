import React from 'react';

import ImgBox from '../../../shared/components/UIELements/ImgBox';

import BannerImg from '../images/JWebResearch.jpg';

import './ICore.css';

const ICore = () => {
    return (
        <React.Fragment>
            <ImgBox banner={BannerImg} title="Research"/>
            <h1>Therapeutic Blood Processing</h1>
        </React.Fragment>
    );
}

export default ICore;