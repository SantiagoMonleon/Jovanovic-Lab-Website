import React from 'react';

import './ImgBox.css';

const imgBox = (props) => {
    const banner = props.banner;
    const imgBox = {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))," +`url(${banner})`,
        height: "230px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        padding: 0,
        margin: 0,
    }
    if(window.innerWidth < 532){
        imgBox.height = "130px"
    } else if (window.innerWidth > 1300 && window.innerWidth < 1900){
        imgBox.height = "330px"
    } else if (window.innerWidth >= 1900){
        imgBox.height = "430px"
    }
    return (
        <div style={imgBox}>
            <div className="img-text">
                <h3>Jovanovic Lab at Oregon State University</h3>
                <h2>{props.title}</h2>
            </div>
        </div>
    );
}


export default imgBox;