import React, { useState } from "react";
import '../../style/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Reset form
    setFormData({ name: '', email: '', message: '' });

    // Show popup
    setShowPopup(true);

    // Auto close after 3 sec
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact <span>Me</span></h2>
        <p className="subtitle">
          Have a project in mind or just want to say hi? Fill the form below
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              name="message"
              placeholder="Your Message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>🎉 Thank you!</h3>
            <p>Your message has been sent successfully. I will get back to you soon.</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
