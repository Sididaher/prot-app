import React from 'react';
import { FaGraduationCap, FaCode, FaLightbulb } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    alignItems: 'start'
                }}>
                    {/* Main Text Content */}
                    <div className="card" style={{ height: '100%' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                            Who I Am
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            I am a dedicated software development student at <strong>Supnum</strong>, driven by a passion for building functional and aesthetically pleasing web applications.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                            My journey is defined by constant learning and applying new technologies to solve real-world problems. I aspire to become a professional software engineer who contributes to impactful projects.
                        </p>
                    </div>

                    {/* Highlights / Stats */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
                            <div style={{
                                background: 'rgba(59, 130, 246, 0.1)',
                                padding: '1rem',
                                borderRadius: '12px',
                                color: 'var(--primary)',
                                fontSize: '1.5rem'
                            }}>
                                <FaGraduationCap />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Education</h4>
                                <p style={{ color: 'var(--text-muted)' }}>Student at Supnum</p>
                            </div>
                        </div>

                        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
                            <div style={{
                                background: 'rgba(6, 182, 212, 0.1)',
                                padding: '1rem',
                                borderRadius: '12px',
                                color: 'var(--accent)',
                                fontSize: '1.5rem'
                            }}>
                                <FaCode />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Focus</h4>
                                <p style={{ color: 'var(--text-muted)' }}>Web Development & Database</p>
                            </div>
                        </div>

                        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
                            <div style={{
                                background: 'rgba(245, 158, 11, 0.1)',
                                padding: '1rem',
                                borderRadius: '12px',
                                color: '#f59e0b',
                                fontSize: '1.5rem'
                            }}>
                                <FaLightbulb />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Interests</h4>
                                <p style={{ color: 'var(--text-muted)' }}>Learning New Tech, Problem Solving</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
