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

    return (
        <header style={{
            position: 'fixed',
            top: '0',
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: scrolled ? '1rem 0' : '1.5rem 0',
            transition: 'var(--transition-fast)',
            background: scrolled ? 'rgba(2, 6, 23, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(16px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--border-glass)' : '1px solid transparent'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#hero" style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '800', 
                    color: '#fff', 
                    letterSpacing: '-1px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px'
                }}>
                    Sid'Taher<span style={{ color: 'var(--primary)', fontSize: '2rem', lineHeight: '0' }}>.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} style={{ 
                                    fontSize: '0.9rem', 
                                    fontWeight: '500', 
                                    color: 'var(--text-muted)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }} className="nav-link">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href="#contact" className="btn-premium btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
                                Hire Me
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Btn */}
                <button 
                    className="mobile-btn" 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{ 
                        background: 'none', 
                        border: 'none', 
                        color: '#fff', 
                        fontSize: '1.5rem', 
                        cursor: 'pointer' 
                    }}
                >
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: 'var(--bg-dark)',
                zIndex: 999,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
                transition: '0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
                opacity: mobileMenuOpen ? 1 : 0
            }}>
                {navLinks.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.href} 
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ fontSize: '2rem', fontWeight: '700', color: '#fff' }}
                    >
                        {link.name}
                    </a>
                ))}
                <a 
                    href="#contact" 
                    className="btn-premium btn-primary" 
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Hire Me
                </a>
            </div>

            <style>{`
                .nav-link:hover {
                    color: #fff !important;
                }
                .desktop-nav {
                    display: block;
                }
                .mobile-btn {
                    display: none;
                }
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none;
                    }
                    .mobile-btn {
                        display: block;
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;

