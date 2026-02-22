import React from 'react';

const projects = [
  {
    num: '01', status: '✦ Live', wide: false,
    name: 'Secure Biometric Voting System',
    desc: 'A secure web-based voting platform for JKUAT integrating face recognition, JWT authentication, and an admin dashboard. Built entirely in React with REST API integration.',
    tags: ['React','JWT','Face Recognition','Node.js','MongoDB','REST API'],
    live: 'https://secure-online-voting-system-ten.vercel.app/',
    github: 'https://github.com/mariontamnai/Secure-online-voting-system',
  },
  {
    num: '02', status: 'In Progress', wide: false,
    name: 'ZaymaPay',
    desc: 'A cross-platform mobile banking app with login, home, send money, and transaction history screens built with React Native.',
    tags: ['React Native','Fintech','Mobile','UI/UX'],
    live: null,
    github: 'https://github.com/mariontamnai/zaymapay',
  },
  {
    num: '03', status: '✦ Live', wide: true,
    name: 'Number Guessing Game',
    desc: 'An interactive number guessing game built with HTML, CSS, and JavaScript. Features random number generation, user feedback, and score tracking.',
    tags: ['HTML5','CSS3','JavaScript','DOM Manipulation'],
    live: 'https://mariontamnai.github.io/number-guessing-game/',
    github: null,
  },
];

const Projects = () => (
  <section id="projects" style={{ padding: '3rem 4rem', position: 'relative', zIndex: 1 }}>
    <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '0.8rem' }}>What I've Built</div>
    <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 300, marginBottom: '3.5rem', lineHeight: 1.1 }}>
      Featured <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>Projects</em>
    </h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '1.5rem' }}>
      {projects.map((p, i) => (
        <div
          key={i}
          className={`project-card ${p.wide ? 'wide' : ''}`}
          style={{ gridColumn: p.wide ? 'span 2' : 'span 1' }}
        >
          <div style={{ padding: '2rem 2rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '4rem', fontWeight: 300, color: 'rgba(232,160,69,0.15)', lineHeight: 1 }}>{p.num}</span>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', background: 'var(--amber-pale)', padding: '0.3rem 0.8rem', borderRadius: '50px' }}>{p.status}</span>
          </div>
          <div style={{ padding: '1rem 2rem 2rem' }}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>{p.name}</div>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem', fontWeight: 300 }}>{p.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
              {p.tags.map((t, j) => (
                <span key={j} style={{ fontSize: '0.72rem', padding: '0.25rem 0.7rem', border: '1px solid var(--border)', color: 'var(--muted)', borderRadius: '50px' }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {p.live && <a href={p.live} target="_blank" rel="noreferrer" style={{ fontSize: '0.83rem', color: 'var(--amber)', textDecoration: 'none' }}>Live Demo →</a>}
              {p.github && <a href={p.github} target="_blank" rel="noreferrer" style={{ fontSize: '0.83rem', color: 'var(--amber)', textDecoration: 'none' }}>GitHub →</a>}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;