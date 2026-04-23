import React from 'react';
import profileImage from '../assets/profile.jpg';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
            <div className="container">
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1.2fr 0.8fr', 
                    gap: '4rem', 
                    alignItems: 'center' 
                }} className="hero-content">
                    
                    <div className="reveal active">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                            <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                            <span style={{ 
                                color: 'var(--primary)', 
                                fontWeight: '600', 
                                letterSpacing: '3px', 
                                textTransform: 'uppercase', 
                                fontSize: '0.85rem' 
                            }}>
                                Web | Dev Mobile | Software Dev
                            </span>
                        </div>
                        
                        <h1 style={{ 
                            fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
                            lineHeight: '1.1', 
                            marginBottom: '2rem',
                            color: '#fff'
                        }}>
                            Building the <span style={{ 
                                background: 'linear-gradient(to right, var(--primary), var(--secondary))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>Future</span> of Web & Mobile.
                        </h1>
                        
                        <p style={{ 
                            fontSize: '1.25rem', 
                            color: 'var(--text-muted)', 
                            maxWidth: '600px', 
                            marginBottom: '3rem',
                            fontWeight: '300',
                            lineHeight: '1.8'
                        }}>
                            Hi, I'm <strong style={{ color: '#fff' }}>Sid'Taher Omar</strong>. I specialize in building high-performance web applications and mobile experiences with modern technologies.
                        </p>
                        
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            <a href="#projects" className="btn-premium btn-primary">
                                View Projects <FaChevronRight size={14} />
                            </a>
                            <a href="#contact" className="btn-premium btn-secondary">
                                Let's Talk
                            </a>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '4rem' }}>
                            {[
                                { icon: <FaGithub />, link: "https://github.com/Sididaher" },
                                { icon: <FaLinkedin />, link: "https://linkedin.com" },
                                { icon: <FaEnvelope />, link: "mailto:omarsiditaher@gmail.com" }
                            ].map((social, i) => (
                                <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" style={{
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    border: '1px solid var(--border-glass)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--text-muted)',
                                    fontSize: '1.2rem'
                                }} className="social-icon">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="reveal active" style={{ position: 'relative' }}>
                        <div className="animate-float" style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '450px',
                            aspectRatio: '1',
                            margin: '0 auto'
                        }}>
                            {/* Decorative Elements */}
                            <div style={{
                                position: 'absolute',
                                top: '-10%',
                                right: '-10%',
                                width: '100%',
                                height: '100%',
                                border: '1px solid var(--primary)',
                                borderRadius: '2rem',
                                opacity: '0.2',
                                zIndex: '0'
                            }}></div>
                            
                            <div style={{
                                position: 'absolute',
                                bottom: '-10%',
                                left: '-10%',
                                width: '100%',
                                height: '100%',
                                border: '1px solid var(--secondary)',
                                borderRadius: '2rem',
                                opacity: '0.2',
                                zIndex: '0'
                            }}></div>

                            <div style={{
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                borderRadius: '2rem',
                                overflow: 'hidden',
                                border: '1px solid var(--border-glass)',
                                zIndex: '1',
                                background: 'var(--bg-card)',
                                backdropFilter: 'blur(10px)'
                            }}>
                                <img 
                                    src={profileImage} 
                                    alt="Sid'Taher Omar" 
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '0',
                                    right: '0',
                                    padding: '2rem',
                                    background: 'linear-gradient(to top, rgba(2, 6, 23, 0.9), transparent)'
                                }}>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
                                        <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#fff', textTransform: 'uppercase' }}>Available for projects</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 992px) {
                    .hero-content {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                    }
                    .hero-content > div {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .hero-content p {
                        margin-left: auto;
                        margin-right: auto;
                    }
                }
                .social-icon:hover {
                    color: var(--primary) !important;
                    border-color: var(--primary) !important;
                    background: rgba(56, 189, 248, 0.05);
                    transform: translateY(-3px);
                }
            `}</style>
        </section>
    );
};

export default Hero;

