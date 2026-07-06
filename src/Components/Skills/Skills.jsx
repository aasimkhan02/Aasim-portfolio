import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsList = [
    {
      title: 'Backend Development',
      description: 'Building reliable server-side applications and the services that power modern software.',
      tech: ['Python', 'Go', 'FastAPI', 'Django', 'REST APIs', 'gRPC']
    },
    {
      title: 'Systems & Infrastructure',
      description: 'Designing software that is scalable, maintainable, and built to handle real workloads.',
      tech: ['Redis', 'Docker', 'GitHub Actions', 'AWS', 'OCI']
    },
    {
      title: 'Databases',
      description: 'Working with relational databases, caching, and efficient data management.',
      tech: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis']
    },
    {
      title: 'Development Workflow',
      description: 'Writing, testing, and maintaining software through modern development practices.',
      tech: ['Git', 'Docker', 'GitHub Actions', 'Github', 'Linux']
    }
  ];

  return (
    <section className="section-padding bg-white" id="skills">
      <div className="container">
        <p className="skills-label mb-20 font-bold uppercase">What I Do</p>
        <div className="skills-list">
          {skillsList.map((skill, index) => {
            // Repeat the tech array to ensure there's enough content to scroll seamlessly
            const repeatedTech = [...skill.tech, ...skill.tech, ...skill.tech, ...skill.tech];
            return (
              <div key={index} className="skill-item">
                <h3 className="skill-headline skill-underline">
                  {skill.title}
                </h3>
                <div className="skill-content-container">
                  <p className="text-secondary body-lg skill-description">
                    {skill.description}
                  </p>
                  <div className="skill-marquee-strip">
                    <div className="marquee-track">
                      {repeatedTech.map((t, idx) => (
                        <React.Fragment key={idx}>
                          <span className="marquee-tech-item">{t}</span>
                          <span className="marquee-star">✦</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;