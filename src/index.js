import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/navBar';
import Footer from './components/footer';
import './styles/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from './Pages/Home';
import Actor from './Pages/Actor';

library.add(faInstagram, faLinkedin, faCoffee);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Actor" element={<Actor/>} />
        
      </Routes>
      <Footer/>
  </BrowserRouter>
)

reportWebVitals();
