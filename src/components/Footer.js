import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-card)', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let's Work Together</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    Feel free to reach out for collaborations or just a friendly hello.
                </p>
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
