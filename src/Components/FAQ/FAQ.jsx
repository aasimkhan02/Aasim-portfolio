import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      num: '01',
      question: 'What kind of projects do you work on?',
      answer: 'I specialize in full-stack web development, creating modern, responsive, and aesthetic applications. I enjoy working on everything from legacy code modernization to dynamic front-end interfaces and robust back-end systems.'
    },
    {
      num: '02',
      question: 'What tech stack and tools do you use?',
      answer: 'My primary stack includes React, Node.js, Python, and FastAPI. I also have experience with databases like SQLite and PostgreSQL, and I frequently use tools like Git, GitHub Actions, and modern CSS frameworks to bring designs to life.'
    },
    {
      num: '03',
      question: 'Do you work remotely or onsite?',
      answer: 'I am highly adaptable and comfortable working in both remote and onsite environments. I have experience collaborating with distributed teams across different time zones.'
    },
    {
      num: '04',
      question: 'Are you open to freelance or collaboration work?',
      answer: 'Yes, I am always open to discussing new freelance opportunities, open-source collaborations, or exciting side projects. Feel free to reach out with your ideas!'
    },
    {
      num: '05',
      question: 'How can I start a new project with you?',
      answer: 'You can start by reaching out via the contact form or sending me a direct email. We will set up an initial consultation to discuss your requirements, timeline, and how we can best collaborate.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white" id="faq" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="faq-header text-center mb-16">
          <h2 className="faq-title uppercase">Frequently Asked Questions</h2>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question-container">
                <div className="faq-question-left">
                  <span className="faq-num">{faq.num}</span>
                  <h3 className="faq-question">{faq.question}</h3>
                </div>
                <div className="faq-icon">
                  <span className="faq-plus"></span>
                </div>
              </div>
              <div 
                className="faq-answer-container" 
                style={{ 
                  maxHeight: openIndex === index ? '200px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <p className="faq-answer text-secondary">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
