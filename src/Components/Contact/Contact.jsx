import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch("https://formsubmit.co/ajax/aasimkroc@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: `${formData.firstName} ${formData.lastName}`,
          Email: formData.email,
          Message: formData.message,
          _subject: `New Portfolio Message from ${formData.firstName} ${formData.lastName}`,
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (response.ok || data.success === "true") {
        setIsSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setErrorMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-page-container" id="contact">
      <div className="container mx-auto">
        <header className="contact-header">
          <h1 className="contact-heading-large" data-aos="fade-up">
            Contact me
          </h1>
        </header>

        <div className="contact-grid">
          <section className="contact-details">
            <div className="contact-info-list">
              <div>
                <a href="mailto:aasimkroc@gmail.com" className="contact-link">aasimkroc@gmail.com</a>
              </div>
              <div>
                <a href="tel:+919372834570" className="contact-link">(+91) 9372834570</a>
              </div>
              <div>
                <address className="not-italic">
                  Mumbai, India
                </address>
              </div>
            </div>
          </section>

          <section className="contact-form-container">
            {isSubmitted ? (
              <div className="form-success-msg">
                <h3>Message Sent to Aasim!</h3>
                <p>Thank you! Your message has been sent to aasimkroc@gmail.com. I'll get back to you shortly.</p>
                <button className="reset-btn" onClick={() => setIsSubmitted(false)}>Send Another Message</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {errorMessage && (
                  <div className="form-error-msg">
                    <p>{errorMessage}</p>
                  </div>
                )}
                <div className="form-group">
                  <div className="form-row">
                    <div className="form-col">
                      <label className="form-label" htmlFor="firstName">First Name</label>
                      <input 
                        className="minimal-input" 
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName}
                        onChange={handleChange}
                        required 
                        type="text" 
                      />
                    </div>
                    <div className="form-col">
                      <label className="form-label" htmlFor="lastName">Last Name</label>
                      <input 
                        className="minimal-input" 
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName}
                        onChange={handleChange}
                        required 
                        type="text" 
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label-title" htmlFor="email">Email</label>
                  <input 
                    className="minimal-input" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    type="email" 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label-title" htmlFor="message">Message</label>
                  <textarea 
                    className="minimal-input resize-none" 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    rows="3"
                  ></textarea>
                </div>

                <div className="submit-container">
                  <button className="submit-btn" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                  </button>
                </div>
              </form>
            )}
          </section>
        </div>
      </div>
    </section>
  );
};

export default Contact;
