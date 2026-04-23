import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const ContactMe = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="reveal">
                    <h2 className="section-title">Get In Touch</h2>
                </div>
                
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1.5fr', 
                    gap: '4rem',
                    alignItems: 'start'
                }} className="contact-grid">
                    
                    <div className="reveal">
                        <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>Let's build something <span style={{ color: 'var(--primary)' }}>extraordinary</span>.</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.8' }}>
                            I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        
                        <div style={{ display: 'grid', gap: '2rem' }}>
                            {[
                                { icon: <FaEnvelope />, label: "Email", value: "omarsiditaher@gmail.com", link: "mailto:omarsiditaher@gmail.com" },
                                { icon: <FaLinkedin />, label: "LinkedIn", value: "Sid'Taher Omar", link: "https://linkedin.com" },
                                { icon: <FaGithub />, label: "GitHub", value: "Sididaher", link: "https://github.com/Sididaher" }
                            ].map((item, i) => (
                                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="contact-item">
                                    <div style={{ 
                                        width: '50px', 
                                        height: '50px', 
                                        borderRadius: '12px', 
                                        background: 'rgba(255, 255, 255, 0.05)', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        fontSize: '1.2rem',
                                        color: 'var(--primary)',
                                        border: '1px solid var(--border-glass)'
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</p>
                                        <p style={{ fontSize: '1.1rem', color: '#fff', fontWeight: '600' }}>{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="reveal glass-card" style={{ padding: '3rem' }}>
                        <form style={{ display: 'grid', gap: '2rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-row">
                                <div className="input-group">
                                    <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>Your Name</label>
                                    <input type="text" placeholder="John Doe" className="premium-input" />
                                </div>
                                <div className="input-group">
                                    <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="premium-input" />
                                </div>
                            </div>
                            
                            <div className="input-group">
                                <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>Subject</label>
                                <input type="text" placeholder="How can I help you?" className="premium-input" />
                            </div>

                            <div className="input-group">
                                <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>Message</label>
                                <textarea rows="5" placeholder="Tell me about your project..." className="premium-input" style={{ resize: 'none' }}></textarea>
                            </div>

                            <button type="submit" className="btn-premium btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                Send Message <FaPaperPlane size={14} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
                .premium-input {
                    width: 100%;
                    padding: 1rem 1.25rem;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid var(--border-glass);
                    border-radius: 0.75rem;
                    color: #fff;
                    font-family: inherit;
                    transition: var(--transition-fast);
                }
                .premium-input:focus {
                    outline: none;
                    border-color: var(--primary);
                    background: rgba(255, 255, 255, 0.05);
                    box-shadow: 0 0 20px rgba(56, 189, 248, 0.1);
                }
                .contact-item:hover div {
                    background: rgba(56, 189, 248, 0.1);
                    border-color: var(--primary);
                    transform: scale(1.05);
                }
                @media (max-width: 992px) {
                    .contact-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
                @media (max-width: 600px) {
                    .form-row {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default ContactMe;
