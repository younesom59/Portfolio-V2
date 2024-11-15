import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <footer className="contact" id="contact">
      <h4>Contact</h4>
      <p>Email : <a href="mailto:ouamariyounes@gmail.com">ouamariyounes@gmail.com</a></p>
      <div className="social-icons">
        <a href="https://x.com/yns_om"><img src="/img/x.png" alt="Twitter" /></a>
      </div>
    </footer>
  );
}

export default Contact;
