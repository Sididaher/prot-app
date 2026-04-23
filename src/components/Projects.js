import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaRocket } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "Traiteurs",
            description: "A catering and food ordering application with multi-role workflows, real-time features, and modern mobile experience.",
            tech: ["Flutter", "Supabase", "Dart", "PostgreSQL"],
            link: "https://apps.apple.com/fr/app/traiteurs/id6759182605",
            github: "https://github.com/Sididaher"
        },
        {
            title: "ExCoreX / Trading Platform",
            description: "A modern trading-style platform with admin and user flows, financial operations, dashboard experiences, and Supabase-backed architecture.",
            tech: ["React", "Supabase", "Node.js", "Chart.js"],
            link: "https://oxcorex.com",
            github: "https://github.com/Sididaher"
        },
        {
            title: "Bac-English",
            description: "An English learning platform designed to help students improve their language skills through structured lessons and educational content.",
            tech: ["React Native", "Firebase", "Node.js"],
            link: "https://bac-english-neon.vercel.app/",
            github: "https://github.com/Sididaher"
        },
        {
            title: "Achat App",
            description: "A modern e-commerce application focused on delivering a clean, intuitive, and visually polished shopping experience.",
            tech: ["Flutter", "React", "Node.js", "MySQL"],
            link: "https://github.com/Sididaher/achats",
            github: "https://github.com/Sididaher/app-mobile"
        },
        {
            title: "WorkNow",
            description: "A modern job and opportunity platform designed to connect users with work opportunities through a clean, practical interface.",
            tech: ["React", "Next.js", "Tailwind CSS", "Prisma"],
            link: "https://work-now-3a29.vercel.app/",
            github: "https://github.com/Sididaher/WorkNow"
        },
        {
            title: "Voty",
            description: "A modern voting and participation platform built to support organized decision-making and community interaction.",
            tech: ["React", "TypeScript", "Node.js", "MongoDB"],
            link: "#",
            github: "https://github.com/zein114/voty"
        },
        {
            title: "Village Résilient",
            description: "A community-focused digital project designed to support local resilience and organization through a structured platform.",
            tech: ["React", "Leaflet", "Node.js"],
            link: "#",
            github: "https://github.com/OumouMohamedBa/defi"
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title reveal">Featured Projects</h2>
                
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', 
                    gap: '2.5rem' 
                }} className="projects-grid">
                    {projects.map((project, i) => (
                        <div key={i} className="glass-card reveal" style={{ 
                            padding: '0', 
                            display: 'flex', 
                            flexDirection: 'column',
                            height: '100%'
                        }}>
                            {/* Card Visual Header */}
                            <div style={{
                                height: '200px',
                                background: `linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(129, 140, 248, 0.1) 100%)`,
                                borderBottom: '1px solid var(--border-glass)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <FaRocket style={{ fontSize: '3rem', color: 'var(--primary)', opacity: '0.5' }} />
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    padding: '0.4rem 1rem',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '100px',
                                    fontSize: '0.7rem',
                                    fontWeight: '700',
                                    color: 'var(--primary)',
                                    textTransform: 'uppercase',
                                    border: '1px solid var(--border-glass)'
                                }}>Case Study</div>
                            </div>

                            {/* Card Content */}
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>{project.title}</h3>
                                <p style={{ 
                                    fontSize: '0.95rem', 
                                    color: 'var(--text-muted)', 
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem',
                                    flex: 1
                                }}>
                                    {project.description}
                                </p>
                                
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                    {project.tech.map((t, j) => (
                                        <span key={j} style={{
                                            fontSize: '0.75rem',
                                            padding: '0.2rem 0.8rem',
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            color: 'var(--accent)',
                                            borderRadius: '4px',
                                            border: '1px solid var(--border-glass)'
                                        }}>{t}</span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-premium btn-secondary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.9rem' }}>
                                        <FaGithub /> Code
                                    </a>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-premium btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.9rem' }}>
                                        <FaExternalLinkAlt /> Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 480px) {
                    .projects-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Projects;
