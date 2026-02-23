import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.5rem 2rem',
        borderBottom: '1px solid rgba(232,160,69,0.08)',
        background: 'rgba(13,11,9,0.95)',
        backdropFilter: 'blur(20px)'
      }}>

        <span style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1.4rem', fontStyle: 'italic',
          color: 'var(--amber)', cursor: 'pointer'
        }}>Marion.</span>

        {/* Desktop links */}
        <ul className="desktop-nav" style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: '2.5rem', listStyle: 'none', alignItems: 'center'
        }}>
          {['projects', 'skills', 'experience', 'contact'].map((item) => (
            <li key={item}>
              <a href={`#${item}`} style={{
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

        {/* Desktop CV */}
        <a href="/Marion_Tamnai_Resume.docx" download className="desktop-nav" style={{
          background: 'var(--amber)', color: '#0d0b09',
          padding: '0.5rem 1.2rem', borderRadius: '50px',
          textDecoration: 'none', fontWeight: 500, fontSize: '0.85rem'
        }}>Download CV</a>

        {/* Hamburger button */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{
          background: 'transparent', border: 'none',
          color: 'var(--amber)', fontSize: '1.5rem',
          cursor: 'pointer', display: 'none'
        }}>{menuOpen ? '✕' : '☰'}</button>

      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: '#0d0b09', zIndex: 99,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '3rem'
        }}>
          {['projects', 'skills', 'experience', 'contact'].map((item) => (
            <a key={item} href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: 'none', color: 'var(--cream)',
                fontSize: '2.5rem', fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic', textTransform: 'capitalize',
                transition: 'color 0.2s'
              }}
            >{item}</a>
          ))}
          <a href="/Marion_Tamnai_Resume.docx" download style={{
            background: 'var(--amber)', color: '#0d0b09',
            padding: '0.8rem 2rem', borderRadius: '50px',
            textDecoration: 'none', fontWeight: 500, fontSize: '1rem'
          }}>Download CV</a>
        </div>
      )}
    </>
  );
};

export default Navbar;