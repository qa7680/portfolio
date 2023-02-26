import React, { useState } from "react";
import images from './images'
import '../styling/footer.css'

const Footer = () => {
    return(
        <div className="footer">
            <hr className="hLine two view"/>
            <h1 className="slideshowHeader">random images</h1>
            <div className="imagesRandom">
                {
                    images.map((image) => {
                        return(
                            <img src={image} className="randomImage"/>
                        )
                    })
                }
            </div>
            <p className="bottomNote">*Portfolio website built from scratch using React.js, Three.js and CSS.</p>
        </div>
    )
};

export default Footer;