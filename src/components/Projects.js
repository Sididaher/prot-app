import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Gestion d’Achat',
            description: 'A web application to manage products, suppliers, and purchases.',
            tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
            link: '#'
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Projects</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project) => (
                        <div key={project.title} className="card">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                                {project.description}
                            </p>

                            <div style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {project.tech.map((t) => (
                                    <span key={t} style={{
                                        fontSize: '0.8rem',
                                        color: 'var(--secondary)',
                                        border: '1px solid var(--secondary)',
                                        padding: '0.2rem 0.6rem',
                                        borderRadius: '20px'
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <a href={project.link} className="btn" style={{
                                width: '100%',
                                textAlign: 'center',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                color: 'var(--text-main)'
                            }}>
                                View Repository
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
