import React, { useState } from 'react';
import '../styles/contactForm.css';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formData, setFormData] = useState({
    occupation: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    region: '',
    message: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.message === ""){
      formData.message = "Pas de message supplémentaire."
    }
    console.log(formData);
    emailjs.send('service_8pz9jdd', 'template_i0ltwhk', formData, 'EGUOv5cA2a8nCXjVm')
      .then((response) => {
        console.log('E-mail envoyé avec succès!', response.status, response.text);
        window.location.reload();
      }, (error) => {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
      });
  };

  return (
    <>
      <form className="contactForm" onSubmit={handleSubmit}>
        <div><h1>Contactez-nous !</h1></div>
        <div className='form_occupation'>
          <div className='form_input'>
            <label>
              <div className="radio_buttons">
                <label><input type="radio" name="occupation" value="Acteur" onChange={handleChange} /><h3>Acteur</h3></label>
                <label><input type="radio" name="occupation" value="Créateur de contenu" onChange={handleChange} /><h3>Créateur de contenu</h3></label>
                <label><input type="radio" name="occupation" value="Artiste" onChange={handleChange} /><h3>Artiste</h3></label>
                <label><input type="radio" name="occupation" value="Autres" onChange={handleChange} /><h3>Autres (Agent, directeur de casting, prod,...)</h3></label>
              </div>
            </label>
          </div>
        </div>
        <br />
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
              <p>Localisation:</p>
              <input type="region" name="region" value={formData.region} onChange={handleChange} />
            </label>
          </div>
        </div>
        <br />
        <div className='form_message'>
          <div className='form_input'>
            <label>
              <p>Message:</p>
              <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
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
