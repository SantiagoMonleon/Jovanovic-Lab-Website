import React from 'react';

import './ImgBox.css';
import gif from './Jovanovic-gif.gif';

console.log(gif);

const imgBox = () => {
    const imgBox = {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))," + `url(${gif})`,
        height: "280px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative"
    }
    if(window.innerWidth < 532){
        imgBox.height = "180px"
    } else if (window.innerWidth > 1300 && window.innerWidth < 1900){
        imgBox.height = "380px"
    } else if (window.innerWidth >= 1900){
        imgBox.height = "480px"
    }
    return (
        <div style={imgBox}>
            <div className="img-text">
                Jovanovic Lab at Oregon State University
            </div>
        </div>
    );
}


export default imgBox;