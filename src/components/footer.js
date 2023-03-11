import React, { useState } from "react";
import images from './images'
import '../styling/footer.css'

const Footer = () => {
    return(
        <div className="footer">
            <hr className="hLine two view"/>
            <p className="bottomNote">*Portfolio website built from scratch using React.js, Three.js and CSS.</p>
        </div>
    )
};

export default Footer;