import React from 'react';
import { FaGraduationCap, FaCode, FaLightbulb } from 'react-icons/fa';

const About = () => {
    const details = [
        {
            icon: <FaGraduationCap />,
            title: "Education",
            content: "Software Development Student at SupNum",
            color: "var(--primary)"
        },
        {
            icon: <FaCode />,
            title: "Focus",
            content: "Full-Stack Development, Web Technologies, and Databases",
            color: "var(--secondary)"
        },
        {
            icon: <FaLightbulb />,
            title: "Interests",
            content: "Learning New Technologies, UI/UX Improvement, and Practical Solutions",
            color: "var(--accent)"
        }
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title reveal">Who I Am</h2>
                
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    gap: '4rem', 
                    alignItems: 'center' 
                }} className="about-grid">
                    
                    <div className="reveal">
                        <p style={{ 
                            fontSize: '1.2rem', 
                            color: 'var(--text-main)', 
                            lineHeight: '1.8', 
                            marginBottom: '2rem' 
                        }}>
                            I am a passionate software development student at <strong style={{ color: 'var(--primary)' }}>SupNum</strong>, focused on building modern, functional, and visually polished digital products. I enjoy creating web applications that combine clean design, solid functionality, and real-world usefulness.
                        </p>
                    </div>

                    <div className="reveal" style={{ display: 'grid', gap: '1.5rem' }}>
                        {details.map((item, i) => (
                            <div key={i} className="glass-card" style={{ 
                                display: 'flex', 
                                gap: '1.5rem', 
                                alignItems: 'center',
                                padding: '1.5rem'
                            }}>
                                <div style={{ 
                                    width: '60px', 
                                    height: '60px', 
                                    borderRadius: '1rem', 
                                    background: `rgba(${item.color === 'var(--primary)' ? '56, 189, 248' : item.color === 'var(--secondary)' ? '129, 140, 248' : '34, 211, 238'}, 0.1)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    color: item.color,
                                    flexShrink: 0
                                }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: '#fff' }}>{item.title}</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 992px) {
                    .about-grid {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
