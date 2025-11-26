import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactMe = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    alignItems: 'start'
                }}>

                    {/* Contact Info Side */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="card" style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--primary)' }}>Let's Talk</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                                I'm currently available for freelance work or full-time positions. If you have a project that needs some creative touch, let's chat.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: 'rgba(59, 130, 246, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--primary)',
                                        fontSize: '1.2rem'
                                    }}>
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Call Me</h4>
                                        <a href="tel:+22249141433" style={{ fontSize: '1.1rem', fontWeight: '600' }}>+222 49 14 14 33</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: 'rgba(6, 182, 212, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--accent)',
                                        fontSize: '1.2rem'
                                    }}>
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Email Me</h4>
                                        <a href="mailto:omarsiditaher@gmail.com" style={{ fontSize: '1.1rem', fontWeight: '600' }}>omarsiditaher@gmail.com</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: 'rgba(245, 158, 11, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#f59e0b',
                                        fontSize: '1.2rem'
                                    }}>
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Location</h4>
                                        <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>Nouakchott, Mauritania</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Side */}
                    <div className="card">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send a Message</h3>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                <div>
                                    <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        style={{
                                            width: '100%',
                                            padding: '0.8rem',
                                            borderRadius: '8px',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            backgroundColor: 'rgba(15, 23, 42, 0.5)',
                                            color: 'var(--text-main)',
                                            outline: 'none',
                                            transition: 'border-color 0.3s'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        style={{
                                            width: '100%',
                                            padding: '0.8rem',
                                            borderRadius: '8px',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            backgroundColor: 'rgba(15, 23, 42, 0.5)',
                                            color: 'var(--text-main)',
                                            outline: 'none',
                                            transition: 'border-color 0.3s'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        backgroundColor: 'rgba(15, 23, 42, 0.5)',
                                        color: 'var(--text-main)',
                                        outline: 'none',
                                        transition: 'border-color 0.3s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        backgroundColor: 'rgba(15, 23, 42, 0.5)',
                                        color: 'var(--text-main)',
                                        outline: 'none',
                                        resize: 'vertical',
                                        transition: 'border-color 0.3s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                                Send Message <FaPaperPlane />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
