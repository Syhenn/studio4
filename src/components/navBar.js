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
        document.body.classList.toggle('floue');
    }

    const closeMenu = () => {
        setIsOpen(false);
        document.body.classList.remove('floue');
    }
    const navigateHome = () =>{
        navigate('/');
    }
    const navigateCastTraining = () => {
        navigate('/CastTraining');
    }
    const navigateToHomeSection = (sectionId) => {
        if (sectionId === 'home_public') {
            window.location.href = '/#home_public';
        } 
        else if (sectionId === 'home_misson') {
            window.location.href = '/#home_misson';
        }        
        else {
            navigate(`/#${sectionId}`);
        }
        closeMenu();
    }
    const scrollToFooter = () => {
        const footer = document.getElementById('footer');
        footer.scrollIntoView({ behavior: "smooth" });
        closeMenu();
    }
    return (
        <nav>
            <div className="nav_logo_container">
                <img src={studio4Logo} alt="studio4 logo" onClick={navigateHome}/>
            </div>
            <div className={`nav_links ${isOpen ? "active" : "close"}`}>
                <a href="#home_misson" onClick={() => navigateToHomeSection('home_misson')}>About</a>
                <a href="#" onClick={navigateCastTraining}>Cast training</a>
                <a href="#" onClick={() => navigateToHomeSection('home_public')}>Articles</a>
                <button className="contact_button" onClick={scrollToFooter}>Contact</button>
            </div>
            <div className="nav_button_area">
                <button className="nav_enquire_button" onClick={() => navigateToHomeSection('home_public')}>En savoir plus</button>
                <div className="burger_menu" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
