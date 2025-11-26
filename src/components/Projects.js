import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'Gestion d\'Achat',
            description: 'A comprehensive web application designed to streamline product management, supplier relationships, and purchase tracking. Features include inventory management, supplier database, and purchase order processing.',
            tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
            github: 'https://github.com/Sididaher/prot-app',
            demo: '#',
            featured: true
        }
    ];

    return (
        <section id="projects" className="section" style={{ backgroundColor: 'rgba(30, 41, 59, 0.3)' }}>
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="card"
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                                padding: '0',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            {/* Project Header with Gradient */}
                            <div style={{
                                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
                                padding: '2rem',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '12px',
                                        background: 'rgba(59, 130, 246, 0.2)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.5rem',
                                        color: 'var(--primary)'
                                    }}>
                                        <FaCode />
                                    </div>
                                    <h3 style={{ fontSize: '1.8rem', margin: 0 }}>{project.title}</h3>
                                </div>
                                {project.featured && (
                                    <span style={{
                                        display: 'inline-block',
                                        padding: '0.3rem 0.8rem',
                                        background: 'rgba(59, 130, 246, 0.2)',
                                        color: 'var(--primary)',
                                        borderRadius: '20px',
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>
                                        Featured
                                    </span>
                                )}
                            </div>

                            {/* Project Content */}
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <p style={{
                                    color: 'var(--text-muted)',
                                    marginBottom: '2rem',
                                    lineHeight: '1.7',
                                    flex: 1
                                }}>
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div style={{ marginBottom: '2rem' }}>
                                    <h4 style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--text-muted)',
                                        marginBottom: '1rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>
                                        Technologies
                                    </h4>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                                        {project.tech.map((t) => (
                                            <span key={t} style={{
                                                fontSize: '0.85rem',
                                                color: 'var(--primary)',
                                                background: 'rgba(59, 130, 246, 0.1)',
                                                border: '1px solid rgba(59, 130, 246, 0.3)',
                                                padding: '0.4rem 0.9rem',
                                                borderRadius: '6px',
                                                fontWeight: '500'
                                            }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                        style={{
                                            flex: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.5rem'
                                        }}
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="btn"
                                        style={{
                                            flex: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.5rem',
                                            border: '1px solid var(--primary)',
                                            color: 'var(--primary)',
                                            background: 'transparent'
                                        }}
                                    >
                                        <FaExternalLinkAlt /> Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
