import React from "react";
import '../styling/about.css'

const About = () => {
    return(
        <div id = "about" className="about">
            <hr className="hLine two view"/>
            <h1>About</h1>
            <div className="aboutSection">
                <p>Full stack developer with almost 5 years of personal experience. I have extensively used React.js and Node.js combined
                    with MongoDB to build full stack websites while also understanding the core principles of front-end and back-end
                    development. I have high proficiency in python and have a solid grasp of the NumPy and pandas libraries and I've
                    worked with SQL database systems such as MySQL and MsSQL. I've written advanced SQL queries(ex. JOINs, WITH clause, WHILE loops)
                    and I've used Excel concepts such as functions, VLOOKUP and pivot tables for basic to intermediate data analysis.
                </p>
                <div className="techStack">
                    <div className="programmingDatabase">
                        <div className="programmingLanguages">
                            <h3 style={{margin: 0, marginBottom: '0.5rem', color: 'white'}}>Programming</h3>
                            <ul className="stackList">
                                <li>Javascript</li>
                                <li>Python</li>
                                <li>SQL</li>
                                <li>NoSQL</li>
                                <li>HTML</li>
                                <li>CSS and SASS</li>
                            </ul>
                        </div>
                        <div className="programmingLanguages">
                            <h3 style={{margin: 0, color: 'white', marginBottom: '0.5rem'}}>Front End</h3>
                            <ul className="stackList">
                                <li>React.js</li>
                                <li>Vue.js</li>
                                <li>Three.js</li>
                                <li>Chart.js</li>
                                <li>Bootstrap</li>
                                <li>Webpack</li>                                
                            </ul>
                        </div>
                    </div>
                    <div className="programmingDatabase">
                        <div className="databaseLanguages">
                            <h3 style={{margin: 0, color: 'white', marginBottom: '0.5rem'}}>Database/Data Analysis</h3>
                            <ul className="stackList">
                                <li>MongoDB</li>
                                <li>PostgreSQL</li>
                                <li>MySQL / MsSQL</li>
                                <li>NumPy</li>
                                <li>pandas</li>
                                <li>Beautiful Soup</li>
                            </ul>
                        </div>
                        <div className="databaseLanguages">
                            <h3 style={{margin: 0, color: 'white', marginBottom: '0.5rem'}}>Back End</h3>
                            <ul className="stackList">
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>REST APIs</li>
                                <li>MVC Architecture</li>
                                <li>Firebase / Heroku / Netlify</li>
                                <li>Git</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;