import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/navBar';
import Footer from './components/footer';
import './styles/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Home from './Pages/Home';
import Actor from './Pages/Actor';
import Creator from './Pages/Creator';
import Artist from './Pages/Artiste';
import CastTraining from './Pages/CastTraining';
library.add(faInstagram, faLinkedin, faCoffee);

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Actor" element={<Actor />} />
        <Route path="/Creator" element={<Creator />} />
        <Route path="/Artist" element={<Artist />} />
        <Route path="/CastTraining" element={<CastTraining />} />
      </Routes>
      <Footer />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
