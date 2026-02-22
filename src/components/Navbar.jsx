import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1.5rem 4rem',
      borderBottom: '1px solid rgba(232,160,69,0.08)',
      background: 'rgba(13,11,9,0.85)',
      backdropFilter: 'blur(20px)'
    }}>

      <span style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.4rem', fontStyle: 'italic',
        color: 'var(--amber)', cursor: 'pointer'
      }}>Marion.</span>

      <ul style={{
        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: '2.5rem', listStyle: 'none', alignItems: 'center'
      }}>
        {['projects', 'skills', 'experience', 'contact'].map((item) => (
          <li key={item}>
            <a href={`#${item}`}
              style={{
                textDecoration: 'none', color: 'var(--muted)',
                fontSize: '0.85rem', letterSpacing: '0.06em',
                textTransform: 'capitalize', transition: 'color 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >{item}</a>
          </li>
        ))}
      </ul>

      <a href="/Marion_Tamnai_Resume.docx" download
        style={{
          background: 'var(--amber)', color: '#0d0b09',
          padding: '0.5rem 1.2rem', borderRadius: '50px',
          textDecoration: 'none', fontWeight: 500, fontSize: '0.85rem',
          transition: 'all 0.2s'
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'var(--amber-light)'}
        onMouseLeave={e => e.currentTarget.style.background = 'var(--amber)'}
      >Download CV</a>

    </nav>
  );
};

export default Navbar;