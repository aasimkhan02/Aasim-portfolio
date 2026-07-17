import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-page-container" id="contact">
      <div className="container mx-auto">
        <header className="contact-header">
          <h1 className="contact-heading-large">
            Contact me
          </h1>
        </header>

        <div className="contact-grid">
          <section className="contact-details">
            <div className="contact-info-list">
              <div>
                <p>aasimkroc@gmail.com</p>
              </div>
              <div>
                <p>(+91) 9372834570</p>
              </div>
              <div>
                <address className="not-italic">
                  Mumbai, India
                </address>
              </div>
            </div>
          </section>

          <section className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <div className="form-row">
                  <div className="form-col">
                    <label className="form-label" htmlFor="first-name">First Name</label>
                    <input className="minimal-input" id="first-name" name="first-name" required type="text" />
                  </div>
                  <div className="form-col">
                    <label className="form-label" htmlFor="last-name">Last Name</label>
                    <input className="minimal-input" id="last-name" name="last-name" required type="text" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label-title" htmlFor="email">Email</label>
                <input className="minimal-input" id="email" name="email" required type="email" />
              </div>

              <div className="form-group">
                <label className="form-label-title" htmlFor="message">Message</label>
                <textarea className="minimal-input resize-none" id="message" name="message" required rows="1"></textarea>
              </div>

              <div className="submit-container">
                <button className="submit-btn" type="submit">
                  SUBMIT
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Contact;
