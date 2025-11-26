import React from 'react';

const ContactMe = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Contact Me</h2>

                <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Name</label>
                            <input
                                type="text"
                                id="name"
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '5px',
                                    border: '1px solid var(--secondary)',
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    color: 'var(--text-main)',
                                    outline: 'none',
                                }}
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Email</label>
                            <input
                                type="email"
                                id="email"
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '5px',
                                    border: '1px solid var(--secondary)',
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    color: 'var(--text-main)',
                                    outline: 'none',
                                }}
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '5px',
                                    border: '1px solid var(--secondary)',
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    color: 'var(--text-main)',
                                    outline: 'none',
                                    resize: 'vertical',
                                }}
                                placeholder="Your message..."
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
