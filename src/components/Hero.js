import React from 'react';
import profileImage from '../assets/profile.jpg';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';

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

            <div className="container animate-fade-in" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap-reverse', gap: '2rem' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
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
                            backgroundClip: 'text',
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

                <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                    <div style={{
                        width: 'min(350px, 90vw)',
                        height: 'min(350px, 90vw)',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '4px solid rgba(59, 130, 246, 0.3)',
                        boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
                        position: 'relative',
                    }}>
                        <img
                            src={profileImage}
                            alt="Sid'Taher Omar"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <a href="https://github.com/Sididaher" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.8rem', color: 'var(--text-main)', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-main)'}>
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/feed/?trk=hb_signin" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.8rem', color: '#0077b5', transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                            <FaLinkedin />
                        </a>
                        <a href="https://www.facebook.com/sidicheikh.omr" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.8rem', color: '#1877f2', transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                            <FaFacebook />
                        </a>
                        <a href="mailto:omarsiditaher@gmail.com" style={{ fontSize: '1.8rem', color: '#EA4335', transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Hero;
