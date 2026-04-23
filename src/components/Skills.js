import React from 'react';
import { 
    FaReact, FaNodeJs, FaPhp, FaPython, FaGitAlt, 
    FaLinux, FaDocker, FaDatabase 
} from 'react-icons/fa';
import { 
    SiNextdotjs, SiTypescript, SiTailwindcss, 
    SiSupabase, SiPostgresql, SiMysql, SiMongodb, SiFlutter, SiJavascript 
} from 'react-icons/si';

const Skills = () => {
    const skillGroups = [
        {
            title: "Frontend",
            skills: [
                { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
                { name: 'Next.js', icon: <SiNextdotjs />, color: '#fff' },
                { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
                { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
                { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
            ]
        },
        {
            title: "Backend & Databases",
            skills: [
                { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
                { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
                { name: 'Python', icon: <FaPython />, color: '#3776AB' },
                { name: 'Supabase', icon: <SiSupabase />, color: '#3ECF8E' },
                { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
                { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
                { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
            ]
        },
        {
            title: "Tools & Mobile",
            skills: [
                { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
                { name: 'Git / GitHub', icon: <FaGitAlt />, color: '#F05032' },
                { name: 'Linux', icon: <FaLinux />, color: '#FCC624' },
                { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
            ]
        }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title reveal">My Expertise</h2>
                
                <div style={{ display: 'grid', gap: '3rem' }}>
                    {skillGroups.map((group, i) => (
                        <div key={i} className="reveal">
                            <h3 style={{ 
                                fontSize: '1.2rem', 
                                color: 'var(--primary)', 
                                marginBottom: '1.5rem',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}>
                                {group.title}
                                <div style={{ flex: 1, height: '1px', background: 'var(--border-glass)' }}></div>
                            </h3>
                            
                            <div style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
                                gap: '1.5rem' 
                            }}>
                                {group.skills.map((skill, j) => (
                                    <div key={j} className="glass-card skill-card" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        padding: '1.25rem'
                                    }}>
                                        <div style={{ 
                                            fontSize: '1.5rem', 
                                            color: skill.color,
                                            display: 'flex'
                                        }}>
                                            {skill.icon}
                                        </div>
                                        <span style={{ fontSize: '0.95rem', fontWeight: '500', color: '#fff' }}>
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .skill-card:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: var(--primary);
                }
            `}</style>
        </section>
    );
};

export default Skills;
