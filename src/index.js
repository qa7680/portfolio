import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/nav';
import Home from './components/home';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import './styling/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
    <Navbar />
    <Home />
    <Projects />
    <About />
    <Contact />
    <Footer />
    </div>
  </React.StrictMode>
);
