import React from "react";
import '../styling/projects.css'

const Projects = () => {
    return(
        <div id = "projects"className="projectsContainer">
            <h1 className="projectsHeader">Projects</h1>
            <hr className="hLine"/>
            <div className="projectOne">
                <h2 className="nodeBook">
                    Nodebook
                </h2>
                <p style={{padding: 0, margin: 0}}>
                    Full Stack Social Media App.
                </p>
                <div className="projectInfo">
                    <img src={require('../images/nodebookshot.png')} className="projectImg"></img>
                    <div className="projectInfoRightSide">
                        <div className="projectSummary">
                            <h3>Summary / Project Goals</h3>
                            <p>A Facebook inspired full stack social media app where users can create/comment on posts, add friends
                                , upload photos, and much more. The web app was created using Node for the back-end, React for the front-end, MongoDB 
                                for the database and the multer middleware to store images. A REST api was created using the Express js framework to store/retrieve data.
                                The main goal of this project was to create a full stack web application using a back end and a front end framework while working with a REST api.</p>
                        </div>
                        <div className="projectStack">
                            <h3>Tech Stack</h3>
                            <p className="stackList">Node.js, Express.js, React.js, MongoDB, Multer.</p>
                        </div>
                        <div className="previewCode">
                            <div className="previewImg">
                                <a href="https://qa7680-nodebook.netlify.app/" target="_blank" className="previewRepo">LIVE PREVIEW</a>
                                <img className="linkIcon" src={require('../images/icon3636.png')}/>
                            </div>
                            <div className="previewImg">
                                <a href="https://github.com/qa7680/nodebook-client" target="_blank" className="previewRepo">VIEW CODE/REPO</a>
                                <img className="linkIcon" src={require('../images/icon3636.png')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="hLine two"/>
            <div className="projectOne">
                <h2 className="nodeBook">
                    Shopping Cart / Shoe Store
                </h2>
                <p style={{padding: 0, margin: 0}}>
                    Fully responsive React e-commerce website.
                </p>
                <div className="projectInfo">
                    <img src={require('../images/Shoe-Store5.png')} className="projectImg"></img>
                    <div className="projectInfoRightSide">
                        <div className="projectSummary">
                            <h3>Summary / Project Goals</h3>
                            <p>A fully responsive front end e-commerce shoe store built using React, the React Router framework and SASS/CSS
                            . The site is currently being hosted on Firebase. Users can browse shoes where they can add and remove shoes from their cart.
                            The two main goals of this project were to practice React fundamentals,
                            such as functional components, JSX, React HOOKS, state/setState, props and conditional rendering
                            and to apply React testing methods using the Jest framework. 
                            </p>
                        </div>
                        <div className="projectStack">
                            <h3>Tech Stack</h3>
                            <p className="stackList">React.js, React Router, SASS, CSS, Firebase, Jest.</p>
                        </div>
                        <div className="previewCode">
                            <div className="previewImg">
                                <a href="https://shopping-cart-c6851.web.app/" target="_blank" className="previewRepo">LIVE PREVIEW</a>
                                <img className="linkIcon" src={require('../images/icon3636.png')}/>
                            </div>
                            <div className="previewImg">
                                <a href="https://github.com/qa7680/shopping-cart" target="_blank" className="previewRepo">VIEW CODE/REPO</a>
                                <img className="linkIcon" src={require('../images/icon3636.png')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="hLine two"/>
            <div className="projectOne">
                <h2 className="nodeBook">
                    Light Twitch
                </h2>
                <p style={{padding: 0, margin: 0}}>
                    Twitch clone built from scratch using React and the Twitch API.
                </p>
                <div className="projectInfo">
                    <img src={require('../images/twitchimage.png')} className="projectImg Twitch"></img>
                    <div className="projectInfoRightSide">
                        <div className="projectSummary">
                            <h3>Summary / Project Goals</h3>
                            <p>A responsive fully functional lighter version of twitch made by scratch using React and the Twitch API.
                                Users can search or browse by directory for different streamers, games and clips. The UI was made with
                                React, SASS/CSS and some help from dev tools.
                                It is a front-end only project however, some back-end logic could be implemented to store
                                users as well as favorite streamers. The main goals of this project were to practice basic React concepts 
                                as well as more advanced React concepts like PropTypes and to implement some basic algorithms for the
                                search and recommended channels sections.
                            </p>
                        </div>
                        <div className="projectStack">
                            <h3>Tech Stack</h3>
                            <p className="stackList">React.js, React Router, SASS, CSS, Netlify, Jest, Twitch API.</p>
                        </div>
                        <div className="previewCode">
                            <div className="previewImg">
                                <a href="https://qa7680-twitch-clone.netlify.app/" target="_blank" className="previewRepo">LIVE PREVIEW</a>
                                <img className="linkIcon" src={require('../images/icon3636.png')}/>
                            </div>
                            <div className="previewImg">
                                <a href="https://github.com/qa7680/twitch-remake" target="_blank" className="previewRepo">VIEW CODE/REPO</a>
                                <img className="linkIcon" src={require('../images/icon3636.png')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="hLine two"/>
            <div className="projectOne">
                <h2 className="nodeBook">
                    Where's Waldo?
                </h2>
                <p style={{padding: 0, margin: 0}}>
                    Photo tagging app/game using React and Firebase.
                </p>
                <div className="projectInfo">
                    <img src={require('../images/waldo3.png')} className="projectImg"></img>
                    <div className="projectInfoRightSide">
                        <div className="projectSummary">
                            <h3>Summary / Project Goals</h3>
                            <p>A responsive photo tagging app based on Where's Waldo. Users have to find three culprits and are scored
                                based on the time it takes for all three to be tagged/found. The app uses React as its front-end 
                                and stores users and their time using Firebase as the back-end. There is also a ranked leaderboard page 
                                where users can view their rankings compared to other users. The main goal of this app/game was to use
                                Firebase as a database/back-end along with React.
                            </p>
                        </div>
                        <div className="projectStack">
                            <h3>Tech Stack</h3>
                            <p className="stackList">React.js, React Router, SASS, CSS, Firebase.</p>
                        </div>
                        <div className="previewCode">
                            <div className="previewImg">
                                <a href="https://waldo-project-321c7.web.app/" target="_blank" className="previewRepo">LIVE PREVIEW</a>
                                <img className="linkIcon" src={require('../images/icon3636.png')}/>
                            </div>
                            <div className="previewImg">
                                <a href="https://github.com/qa7680/where-s-waldo" target="_blank" className="previewRepo">VIEW CODE/REPO</a>
                                <img className="linkIcon" src={require('../images/icon3636.png')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="hLine two"/>
            <div className="projectOne">
                <h2 className="nodeBook">
                    Weather App
                </h2>
                <p style={{padding: 0, margin: 0}}>
                    Weather web app using the openweathermap and unsplash APIs.
                </p>
                <div className="projectInfo">
                    <img src={require('../images/weather2.png')} className="projectImg"></img>
                    <div className="projectInfoRightSide">
                        <div className="projectSummary">
                            <h3>Summary / Project Goals</h3>
                            <p>A weather web app created using html, css, Vanilla JS and DOM manipulation. Users can search, with the openweathermap api,
                                the weather of any city using the "city,country" format and switch between celsius and fahrenheit units. Users can also
                                change the background image with the help of the unsplah api. The main goal of this project was to create an app
                                using APIs with the fetch() method.

                            </p>
                        </div>
                        <div className="projectStack">
                            <h3>Tech Stack</h3>
                            <p className="stackList">HTML, CSS, Vanilla JS, DOM, Netlify, openweathermap API, Unsplash API.</p>
                        </div>
                        <div className="previewCode">
                            <div className="previewImg">
                                <a href="https://qa7680-weather-app.netlify.app/" target="_blank" className="previewRepo">LIVE PREVIEW</a>
                                <img className="linkIcon" src={require('../images/icon3636.png')}/>
                            </div>
                            <div className="previewImg">
                                <a href="https://github.com/qa7680/weather-app" target="_blank" className="previewRepo">VIEW CODE/REPO</a>
                                <img className="linkIcon" src={require('../images/icon3636.png')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="hLine two"/>
            <div className="projectOne">
                <h1 className="viewMore" style={{fontSize: '2rem'}}>
                    <a href="https://github.com/qa7680" target="_blank" className="previewRepo">View More Projects</a>
                    <img className="linkIcon" src={require('../images/icon3636.png')}/>
                </h1>
                <hr className="hLine two view"/>
            </div>
        </div>
    )
};

export default Projects;