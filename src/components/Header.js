import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '1rem 0',
            transition: 'all 0.3s ease',
            backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="/" style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--font-heading)', zIndex: 1001 }}>
                    Sid<span style={{ color: 'var(--primary)' }}>'</span>Taher
                </a>

                {/* Desktop Navigation */}
                <nav style={{ display: 'none' }} className="desktop-nav">
                    <ul style={{ display: 'flex', gap: '2rem' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    style={{
                                        fontWeight: '500',
                                        fontSize: '0.95rem',
                                        opacity: 0.9,
                                    }}
                                    onMouseOver={(e) => e.target.style.color = 'var(--primary)'}
                                    onMouseOut={(e) => e.target.style.color = 'inherit'}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-main)',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        zIndex: 1001
                    }}
                    className="mobile-menu-btn"
                >
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Navigation */}
                <nav
                    style={{
                        position: 'fixed',
                        top: 0,
                        right: mobileMenuOpen ? 0 : '-100%',
                        width: '70%',
                        maxWidth: '300px',
                        height: '100vh',
                        backgroundColor: 'rgba(15, 23, 42, 0.98)',
                        backdropFilter: 'blur(10px)',
                        padding: '5rem 2rem',
                        transition: 'right 0.3s ease',
                        zIndex: 1000
                    }}
                    className="mobile-nav"
                >
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    style={{
                                        fontWeight: '500',
                                        fontSize: '1.1rem',
                                        display: 'block',
                                        padding: '0.5rem 0',
                                    }}
                                    onMouseOver={(e) => e.target.style.color = 'var(--primary)'}
                                    onMouseOut={(e) => e.target.style.color = 'inherit'}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Overlay */}
                {mobileMenuOpen && (
                    <div
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 999
                        }}
                    />
                )}
            </div>

            <style>{`
        @media (min-width: 769px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-nav {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
        </header>
    );
};

export default Header;
