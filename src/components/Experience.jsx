import React from 'react';

const experiences = [
  { role: 'IT Support Intern', company: 'Trademark / Tribe Hotel · Nairobi, Kenya', date: 'May 2025 – August 2025', desc: 'Provided IT support across hotel departments, troubleshooting hardware and software issues to minimize downtime. Gained hands-on experience in a professional IT environment.' },
  { role: 'Personal Web Projects', company: 'Independent', date: '2023 – Present', desc: 'Built and deployed personal projects using HTML, CSS, JavaScript, and React with a focus on responsive design and clean UI. Managed version control using Git and GitHub.' },
  { role: 'Diploma in Information Technology', company: 'Jomo Kenyatta University of Agriculture and Technology (JKUAT)', date: 'Expected June 2026', desc: 'Studying Information Technology with a focus on software development, web technologies, and problem solving.' },
];

const Experience = () => (
  <section id="experience" style={{ padding: '3rem 4rem', position: 'relative', zIndex: 1 }}>
    <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '0.8rem' }}>My Journey</div>
    <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 300, marginBottom: '3.5rem', lineHeight: 1.1 }}>
      Experience & <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>Education</em>
    </h2>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: '750px' }}>
      {experiences.map((exp, i) => (
        <div key={i} className="exp-card" style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid var(--border)',
          borderRadius: '16px', padding: '1.8rem',
          display: 'grid', gridTemplateColumns: 'auto 1fr',
          gap: '1.5rem', alignItems: 'start'
        }}>
          <div style={{ width: '10px', height: '10px', background: 'var(--amber)', borderRadius: '50%', marginTop: '0.5rem' }} />
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.2rem' }}>{exp.role}</div>
            <div style={{ color: 'var(--amber)', fontSize: '0.875rem', marginBottom: '0.3rem' }}>{exp.company}</div>
            <div style={{ color: 'var(--muted)', fontSize: '0.8rem', marginBottom: '0.8rem' }}>{exp.date}</div>
            <div style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300 }}>{exp.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;