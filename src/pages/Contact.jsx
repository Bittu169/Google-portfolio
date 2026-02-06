import { useState } from "react";
import { useEffect } from "react";

import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    // simulate buffering (2 seconds)
    setTimeout(() => {
      setLoading(false);
      setError(true);

      // hide error after 5 seconds
      setTimeout(() => setError(false), 5000);
    }, 2000);
  };

  useEffect(() => {
    document.title = "Contact Bittu";
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        {/* CONTACT CARDS */}
        <div className="contact-cards">
          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <h4>Mobile</h4>
            <p className="diff">+91 6******238</p>
          </div>

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h4>Email</h4>
            <a  href="mailto:jayesh.choudhary2906@gmail.com">
              mondalbittu169@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h4>Address</h4>
            <p className="diff">Howrah, West Bengal</p>
          </div>

          <div className="contact-card">
            <FaLinkedin className="contact-icon" />
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              Contact through LinkedIn
            </a>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="contact-form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name *</label>
                <input type="text" placeholder="Your name..." required />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input type="email" placeholder="Your email..." required />
              </div>
            </div>

            <div className="form-group">
              <label>Subject *</label>
              <input type="text" placeholder="Subject..." required />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea rows="5" placeholder="Message..." required />
            </div>

            <div className="form-actions">
              <button
                type="submit"
                className="send-btn"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>

              {error && (
                <span className="error-msg">
                  Your message could not be sent, Kindly contact directly
                  over Email or Phone!
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
