import React from 'react';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <>
      <Header />
      <div
        className="p-5 homediv d-flex align-items-center justify-content-center"
        style={{
          minHeight: '95vh',
          backgroundColor: '#f0f2f5', // Subtle light gray background
        }}
      >
        <div
          className="text-center py-5 px-4 rounded-3 shadow"
          style={{
            background: 'rgb(244, 247, 252)',
            maxWidth: '600px',
            width: '100%',
            transition: 'transform 0.2s',
          }}
        >
          <h1 className="fw-bolder text-success mb-4">Contact Me</h1>

          {/* Contact Details */}
          <p className="fw-bolder fs-5 mb-3 text-secondary">
            <FontAwesomeIcon icon={faLocationDot} className="me-3" />
            <span>Edappally, Ernakulam, Kerala, India</span>
          </p>
          <p className="fw-bolder fs-5 mb-3 text-secondary">
            <FontAwesomeIcon icon={faPhone} className="me-3" />
            <span>+91 745712587</span>
          </p>
          <p className="fw-bolder fs-5 mb-3 text-secondary">
            <FontAwesomeIcon icon={faEnvelope} className="me-3" />
            <span>nissamohammed8@gmail.com</span>
          </p>

          {/* Social Media Icons */}
          <div className="d-flex justify-content-center gap-4 mt-4">
            <a
              href="https://wa.me/91745712587"
              target="_blank"
              rel="noopener noreferrer"
              className="text-success fs-3"
              title="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-danger fs-3"
              title="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedinprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary fs-3"
              title="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/yourgithubusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark fs-3"
              title="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

