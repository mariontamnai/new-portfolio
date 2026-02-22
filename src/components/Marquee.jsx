/*import React from 'react';

const skills = ['React','JavaScript','HTML5','CSS3','React Native','REST APIs','JWT','Figma','Git & GitHub','TypeScript','Vercel'];

const Marquee = () => {
  const repeated = [...skills, ...skills];
  return (
    <div style={{ overflow: 'hidden', padding: '1.2rem 0',
      borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
      position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'inline-block', whiteSpace: 'nowrap', animation: 'marquee 25s linear infinite' }}>
        {repeated.map((skill, i) => (
          <React.Fragment key={i}>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
              fontSize: '1rem', color: 'var(--muted)', letterSpacing: '0.1em', padding: '0 2rem' }}>
              {skill}
            </span>
            <span style={{ color: 'var(--amber)' }}>·</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;*/