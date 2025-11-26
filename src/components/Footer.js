import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-card)', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let's Work Together</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    Feel free to reach out for collaborations or just a friendly hello.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    <a href="https://github.com/Sididaher" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/feed/?trk=hb_signin" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: '#0077b5' }}>
                        <FaLinkedin />
                    </a>
                    <a href="https://www.facebook.com/sidicheikh.omr" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: '#1877f2' }}>
                        <FaFacebook />
                    </a>
                </div>

                <a href="mailto:contact@example.com" className="btn btn-primary">
                    Get In Touch
                </a>

                <div style={{ marginTop: '4rem', color: 'var(--secondary)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Sid'Taher Omar. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
