import React, { useState } from "react";
import '../styles/navBar.css';
import studio4Logo from '../imgs/studio4_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Ajout de la classe floue à l'élément body lorsque le menu est ouvert
        document.body.classList.toggle('floue');
    }

    const closeMenu = () => {
        setIsOpen(false);
        // Retrait de la classe floue de l'élément body lorsque le menu est fermé
        document.body.classList.remove('floue');
    }
    const navigateHome = () =>{
        navigate('/');
    }
    const navigateToHomeSection = (sectionId) => {
        navigate(`/#${sectionId}`);
        closeMenu();
    }
    return (
        <nav>
            <div className="nav_logo_container">
                <img src={studio4Logo} alt="studio4 logo" onClick={navigateHome}/>
            </div>
            <div className={`nav_links ${isOpen ? "active" : "close"}`}>
                <a href="#" onClick={() => navigateToHomeSection('home_mission')}>About</a>
                <a href="#" onClick={() => navigateToHomeSection('home_public')}>Cast training</a>
                <a href="#" onClick={() => navigateToHomeSection('home_public')}>Articles</a>
                <a href="#" onClick={() => navigateToHomeSection('home_public')}>Contact</a>
            </div>
            <div className="nav_button_area">
                <button className="nav_enquire_button">En savoir plus</button>
                <div className="burger_menu" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
