'use client';

import { useEffect, useRef, useState } from 'react';
import { assetPath } from './asset-path';

export default function Navigation({ destinations }) {
  const [open, setOpen] = useState(false);
  const header = useRef(null);
  const toggle = useRef(null);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1100px)');
    const closeOnResize = () => setOpen(false);
    desktop.addEventListener('change', closeOnResize);
    return () => desktop.removeEventListener('change', closeOnResize);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const dismiss = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event) => {
      if (!header.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('keydown', dismiss);
    document.addEventListener('pointerdown', outside);
    document.addEventListener('focusin', outside);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', dismiss);
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('focusin', outside);
    };
  }, [open]);

  const links = [
    { label: 'Home', href: '#main' },
    { label: 'About us', href: '#about' },
    { label: 'Shop', href: destinations.shop },
    { label: 'Location', href: destinations.location },
  ];

  return (
    <header className={`site-header${open ? ' menu-is-open' : ''}`} ref={header}>
      {open && <div className="menu-backdrop" aria-hidden="true" onClick={() => {
        setOpen(false);
        toggle.current?.focus();
      }} />}
      <div className="navigation-bar">
        <a className="brand" href={assetPath('/')} aria-label="Tinto Commodities home">
          <img src={assetPath('/images/tinto-logo.png')} alt="Tinto" width="258" height="258" />
          <span className="brand-caption">TINTO<span>COMMODITIES</span></span>
        </a>
        <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          <span>{open ? 'Close' : 'Menu'}</span>
          <span className="menu-icon" aria-hidden="true"><i /><i /></span>
        </button>
        <nav id="main-navigation" className={`primary-nav${open ? ' is-open' : ''}`} aria-label="Main navigation">
          <div className="nav-links">
            {links.map(({ label, href }) => href ? (
              <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
            ) : (
              <button key={label} disabled title="Coming soon">{label}</button>
            ))}
          </div>
          {destinations.contact ? (
            <a className="header-contact" href={destinations.contact} onClick={() => setOpen(false)}>Contact us <span aria-hidden="true">↗</span></a>
          ) : (
            <button className="header-contact" disabled title="Coming soon">Contact us <span aria-hidden="true">↗</span></button>
          )}
        </nav>
      </div>
    </header>
  );
}
