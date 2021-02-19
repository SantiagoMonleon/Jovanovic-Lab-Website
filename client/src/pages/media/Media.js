import React from 'react';

import ImgBox from '../../shared/components/UIELements/ImgBox';
import Card from '../../shared/components/UIELements/Card';
import BannerImg from './images/JWebMedia.jpg';
import VideoOne from './videos/JWebVid1.mp4';
import VideoTwo from './videos/JWebVid2.mp4';

import './Media.css';

const Media = (props) => {
    const cardStyle = {
        width: "29%",
        marginLeft: "1.66%",
        minHeight: "100px",
        height: "auto",
        overflow: "hidden",
    }
    return (
        <React.Fragment>
            <ImgBox banner={BannerImg} title="Media"/>
            <div className="media-box">
                <div className="row">
                    <Card style={cardStyle}>
                        <video width="95%" controls>
                            <source src={VideoOne} type="video/mp4"></source>
                            Your browser does not support HTML5 video.
                        </video>
                        <h4>Video Description</h4>
                    </Card>
                    <Card style={cardStyle}>
                        <video width="95%" controls>
                            <source src={VideoTwo} type="video/mp4"></source>
                            Your browser does not support HTML5 video.
                        </video>
                        <h4>Video Description</h4>
                    </Card>
                    <Card style={cardStyle}>
                        <iframe width="95%" src="https://www.youtube.com/embed/lQcfOmuLJTE" allowFullScreen>
                        </iframe>
                        <h4>Multiphase Multichannel Seperator - Presentation</h4>
                    </Card>
                </div>
                <div className="row">
                    <Card style={cardStyle}>
                        <h1>Another Video Here</h1>
                    </Card>
                    <Card style={cardStyle}>
                        <h1>Another Video Here</h1>
                    </Card>
                    <Card style={cardStyle}>
                        <h1>Another Video Here</h1>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Media;