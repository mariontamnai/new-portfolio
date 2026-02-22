import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const links = [
  { label: 'mariontamnai@gmail.com', href: 'mailto:mariontamnai@gmail.com', icon: <MdEmail size={18} /> },
  { label: 'GitHub', href: 'https://github.com/mariontamnai', icon: <FaGithub size={18} /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marion-tamnai-78a57a271', icon: <FaLinkedinIn size={18} /> },
  { label: '+254 114 888 718', href: 'tel:+254114888718', icon: <MdPhone size={18} /> },
];

const Contact = () => (
  <section id="contact" style={{ padding: '3rem 4rem', position: 'relative', zIndex: 1, textAlign: 'center' }}>
    <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 300, lineHeight: 1, marginBottom: '1rem' }}>
      Let's <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>Work</em><br />Together
    </h2>
    <p style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: '3rem', fontWeight: 300 }}>
      Open to frontend internships in Nairobi and remote opportunities.
    </p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
      {links.map((link, i) => (
        <a key={i} href={link.href} target="_blank" rel="noreferrer" style={{
          textDecoration: 'none', color: 'var(--cream)', fontSize: '0.9rem',
          padding: '0.9rem 1.8rem', border: '1px solid var(--border)',
          borderRadius: '50px', background: 'rgba(255,255,255,0.03)',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          transition: 'all 0.2s'
        }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(232,160,69,0.12)';
            e.currentTarget.style.borderColor = 'var(--amber)';
            e.currentTarget.style.color = 'var(--amber)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.color = 'var(--cream)';
          }}
        >
          {link.icon} {link.label}
        </a>
      ))}
    </div>
    <a href="/Marion_Tamnai_Resume.docx" download style={{
      display: 'inline-block', background: 'var(--amber)', color: '#0d0b09',
      padding: '1rem 2.5rem', borderRadius: '50px', textDecoration: 'none',
      fontWeight: 500, fontSize: '0.95rem', transition: 'all 0.2s'
    }}>⬇ Download Resume</a>
  </section>
);

export default Contact;