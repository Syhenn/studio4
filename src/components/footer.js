import React from "react";
import '../styles/footer.css';
import ContactForm from "./contactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <footer id="footer">
            <ContactForm />
            <span className="footer_separation"></span>
            <div className="personal_info">
                <p>Région : Europe</p>
                <a href="mailto:info@studio-4.be">info@studio-4.be</a>
                <div className="network">
                    <a href="https://www.instagram.com/co.gld_/"><FontAwesomeIcon icon={faInstagram} /> co.gld_</a>
                    <a href="https://www.linkedin.com/in/corentin-glaude-934898201/"><FontAwesomeIcon icon={faLinkedin} /> Corentin Glaude</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
