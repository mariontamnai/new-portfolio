import React from 'react';

const Hero = () => {
  return (
    <div id="home" style={{
      minHeight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '7rem 4rem 0',
      position: 'relative',
      zIndex: 1,
      overflow: 'hidden'
    }}>

      
      <div style={{
        position: 'absolute',
        right: '15%',
        top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: 'Bebas Neue, sans-serif',
        fontSize: '30vw',
        color: 'rgba(255,255,255,0.03)',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 0
      }}>MT</div>

      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1.1rem',
          fontStyle: 'italic',
          color: 'var(--amber)',
          letterSpacing: '0.08em',
          marginBottom: '1.2rem',
          animation: 'fadeUp 0.7s 0.1s ease both'
        }}>Hello, I'm</p>

        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(5rem, 10vw, 11rem)',
          fontWeight: 300,
          lineHeight: 0.92,
          letterSpacing: '-0.02em',
          marginBottom: '2rem',
          animation: 'fadeUp 0.7s 0.2s ease both'
        }}>
          Marion<br />
          <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>Tamnai.</em>
        </h1>

        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          gap: '2rem',
          flexWrap: 'wrap',
          animation: 'fadeUp 0.7s 0.3s ease both',
          maxWidth: '420px',
        }}>
          <p style={{
            fontSize: '1rem',
            color: 'var(--muted)',
            lineHeight: 1.8,
            maxWidth: '420px',
            fontWeight: 300
          }}>
            A frontend developer from Nairobi, Kenya building responsive,
            user-friendly web applications with React and modern JavaScript.
            Open to internship opportunities and any open roles available.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start' }}>
            <a href="#projects" style={{
              background: 'var(--amber)', color: '#0d0b09',
              padding: '0.8rem 1.8rem', borderRadius: '50px',
              textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem',
            }}>View My Work</a>
            <a href="#contact" style={{
              border: '1px solid var(--border)', color: 'var(--amber)',
              padding: '0.8rem 1.8rem', borderRadius: '50px',
              textDecoration: 'none', fontSize: '0.9rem'
            }}>Get In Touch</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;