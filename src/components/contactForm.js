import React, { useState } from 'react';
import '../styles/contactForm.css';
const regionsAndCities = {
    "Bruxelles-Capitale": ["Bruxelles"],
    "Wallonie": ["Namur", "Charleroi", "Liège", "Mons"],
    "Flandre": ["Anvers", "Gand", "Bruges"]
    // Ajoutez d'autres régions et villes belges ici
  };

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        region: '',
        city: '',
        gender: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: SEND EMAIL
        console.log(formData);
      };
    return(
        <>
         <form className="contactForm" onSubmit={handleSubmit}>
          <div className='form_name'>
            <div className='form_input'>
              <label>
                  <p>Prénom:</p>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              </label>
            </div>
            <br />
            <div className='form_input'>
              <label>
                  <p>Nom:</p>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              </label>
            </div>
          </div>
            <br />
            <div className='form_mail'>
              <div className='form_input'>
                <label>
                    <p>Adresse e-mail:</p>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
              </div>
              <br />
              <div className='form_input'>
                <label>
                    <p>Numéro de téléphone:</p>
                    <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                </label>
              </div>
            </div>
            <br />
            <div className='form_region'>
              <div className='form_input'>
                <label>
                <p>Région:</p>
                <select name="region" className="form_select" value={formData.region} onChange={handleChange}>
                <option value="">Sélectionnez une région</option>
                {Object.keys(regionsAndCities).map(region => (
                    <option key={region} value={region}>{region}</option>
                ))}
                </select>
                </label>
              </div>
            </div>
            <br />
            <div className='form_gender'>
              <div className='form_input'>
              <label>
                <p>Sexe:</p>
                <select name="gender" className="form_select" value={formData.gender} onChange={handleChange}>
                  <option value="male">Homme</option>
                  <option value="female">Femme</option>
                </select>
              </label>
              </div>
            </div>
            <br />
            <button className="form_submit_button" type="submit">Envoyer</button>
         </form>
        </>

    );
}
export default ContactForm;