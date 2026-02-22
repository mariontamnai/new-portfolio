import React, { useRef } from 'react';

const skillCategories = [
  { title: 'Languages', skills: ['HTML5','CSS3','JavaScript (ES6+)','TypeScript'] },
  { title: 'Frameworks & Libraries', skills: ['React','React Native'] },
  { title: 'Tools & Technologies', skills: ['Git','GitHub','Figma','VS Code','Vercel','REST APIs','JWT'] },
  { title: 'Concepts', skills: ['Responsive Design','UI/UX Fundamentals','Agile Development','Biometric Auth','Version Control'] },
];

const Skills = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: direction === 'left' ? -350 : 350, behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" style={{ padding: '3rem 4rem', position: 'relative', zIndex: 1 }}>
      <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '0.8rem' }}>What I Know</div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 300, lineHeight: 1.1 }}>
          Technical <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>Skills</em>
        </h2>
        <div style={{ display: 'flex', gap: '0.8rem', flexShrink: 0, marginBottom: '0.3rem' }}>
          <button onClick={() => scroll('left')} style={{
            width: '40px', height: '40px', borderRadius: '50%',
            border: '1px solid var(--border)', background: 'rgba(255,255,255,0.03)',
            color: 'var(--amber)', fontSize: '1.1rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s'
          }}>←</button>
          <button onClick={() => scroll('right')} style={{
            width: '40px', height: '40px', borderRadius: '50%',
            border: '1px solid var(--border)', background: 'rgba(255,255,255,0.03)',
            color: 'var(--amber)', fontSize: '1.1rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s'
          }}>→</button>
        </div>
      </div>

      <div ref={sliderRef} style={{
        display: 'flex', gap: '1.2rem',
        overflowX: 'auto', scrollbarWidth: 'none',
        msOverflowStyle: 'none', paddingBottom: '1rem',
        paddingLeft: '0'
      }}>
        {skillCategories.map((cat, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--border)',
            borderRadius: '16px', padding: '1.5rem',
            minWidth: '260px', maxWidth: '260px', flexShrink: 0
          }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '1rem' }}>{cat.title}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {cat.skills.map((s, j) => (
                <span key={j} style={{
                  background: 'rgba(232,160,69,0.08)',
                  border: '1px solid rgba(232,160,69,0.15)',
                  color: 'var(--cream)', padding: '0.35rem 0.9rem',
                  borderRadius: '50px', fontSize: '0.82rem'
                }}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;