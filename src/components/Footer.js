import React from 'react';

const Footer = () => {
    return (
        <footer style={{ 
            padding: '4rem 0', 
            borderTop: '1px solid var(--border-glass)',
            background: 'var(--bg-dark)'
        }}>
            <div className="container" style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '2rem'
            }}>
                <div>
                    <a href="#hero" style={{ 
                        fontSize: '1.2rem', 
                        fontWeight: '800', 
                        color: '#fff', 
                        letterSpacing: '-1px'
                    }}>
                        Sid'Taher<span style={{ color: 'var(--primary)' }}>.</span>
                    </a>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                        Designing and developing premium digital experiences.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '2rem' }}>
                    {['About', 'Skills', 'Projects', 'Contact'].map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} style={{ 
                            fontSize: '0.85rem', 
                            color: 'var(--text-muted)',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }} className="footer-link">
                            {link}
                        </a>
                    ))}
                </div>

                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    &copy; {new Date().getFullYear()} Sid'Taher Omar.
                </div>
            </div>

            <style>{`
                .footer-link:hover {
                    color: var(--primary) !important;
                }
                @media (max-width: 768px) {
                    footer .container {
                        flex-direction: column;
                        text-align: center;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
