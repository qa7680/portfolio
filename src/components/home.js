import React from "react";
import ThreeJayEss from "./threejs";
import '../styling/home.css';
import { gsap } from "gsap";
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        const t1 = gsap.timeline({defaults: {duration:1}})
        t1.fromTo('.homeContainer', {opacity:0}, {opacity:1})
    }, [])

    return(        
        <div className="homeContainerMain">
            <div className="homeContainer">
                <h1>Qassem Ali</h1>
                <h1 className="homeH1">Full Stack Web Developer / Data Analyst.</h1>
            </div>
            <div className="figureImg">
                <ThreeJayEss />
            </div>
        </div>
    )
}

export default Home;