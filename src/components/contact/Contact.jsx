import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <footer className="contact container">
      <h2>Contact</h2>
      <p>
        Contactez-moi pour toute collaboration ou question concernant mes projets !
      </p>
      <p>Email : <a href="mailto:ouamariyounes@gmail.com">ouamariyounes@gmail.com</a></p>
      <div className="social-icons">
        <a href="#"><img src={`${process.env.PUBLIC_URL}/img/instagram.png`} alt="Instagram" /></a>
        <a href="#"><img src={`${process.env.PUBLIC_URL}/img/x.png`} alt="Twitter" /></a>
        <a href="#"><img src={`${process.env.PUBLIC_URL}/img/youtube.png`} alt="YouTube" /></a>
      </div>
    </footer>
  );
}

export default Contact;
