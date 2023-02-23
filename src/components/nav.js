import React, { useEffect, useState } from "react";
import '../styling/nav.css';
import { gsap } from "gsap";

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    const [portfolio, setPortfolio] = useState(false);
    const [about, setAbout] = useState(false);
    const [contact, setContact] = useState(false);

    const onPortClick = () => {
        setPortfolio(true);
        setContact(false);
        setAbout(false);
    }

    const onAboutClick = () => {
        setPortfolio(false);
        setContact(false);
        setAbout(true);
    }

    const onContactClick = () => {
        setPortfolio(false);
        setContact(true);
        setAbout(false);
    }

    useEffect(() => {
        const t1 = gsap.timeline({defaults: {duration:1}})
        t1.fromTo(".fixedNav", {y: "-100%"}, {y:"0%"}) 
    }, [])

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true)
        }else{
            setNavbar(false)
        };
    };

    const removeUnderlines = () =>{
        if(window.scrollY<=80){
            setPortfolio(false);
            setContact(false);
            setAbout(false); 
        }
    }
    
    window.addEventListener('scroll', changeBackground);
    window.addEventListener('scroll', removeUnderlines);


    return(
            <div className= {navbar ? 'fixedNav active' : 'fixedNav'}>
                <div className= {navbar ? 'NavMain active' : 'NavMain'}>
                    <p>Qassem Ali</p>
                    <div className="navLinks">
                        {
                            portfolio ?
                            <a onClick={onPortClick} href="#projects" className="linkSelected">Portfolio</a>
                            :
                            <a onClick={onPortClick} href="#" className="link">Portfolio</a>
                        }
                        {
                            about ?
                            <a onClick={onAboutClick} href="#" className="linkSelected">About</a>
                            :
                            <a onClick={onAboutClick} href="#" className="link">About</a>
                        }
                        {
                            contact ?
                            <a onClick={onContactClick} href="#" className="linkSelected">Contact</a>
                            :
                            <a onClick={onContactClick} href="#" className="link">Contact</a>
                        }                                                                    
                    </div>
                </div>
            </div>
    )
}

export default Navbar