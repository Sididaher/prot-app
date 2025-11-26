import React from 'react';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(15, 23, 42, 0) 70%)',
                borderRadius: '50%',
                zIndex: -1,
            }} />

            <div className="container animate-fade-in">
                <span style={{
                    color: 'var(--accent)',
                    fontWeight: '600',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    display: 'block',
                    marginBottom: '1rem',
                }}>
                    Software Developer
                </span>

                <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 5rem)',
                    fontWeight: '700',
                    marginBottom: '1.5rem',
                    lineHeight: 1.1,
                }}>
                    Hello, I'm <br />
                    <span style={{
                        background: 'linear-gradient(to right, var(--primary), var(--accent))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        Sid'Taher Omar
                    </span>
                </h1>

                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-muted)',
                    maxWidth: '600px',
                    marginBottom: '2.5rem',
                }}>
                    I build accessible, pixel-perfect, and performant web experiences.
                    Passionate about turning ideas into reality through code.
                </p>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn" style={{ border: '1px solid var(--secondary)', color: 'var(--text-main)' }}>Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
