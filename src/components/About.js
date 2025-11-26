import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        I am a software development student at <strong>Supnum</strong>. I am interested in programming websites and learning new technologies.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                        My goal is to become a professional software engineer. I am constantly learning and experimenting with new tools to improve my craft.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
