import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaPhp, FaPython, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiMysql } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
        { name: 'React.js', icon: <FaReact color="#61DAFB" /> },
        { name: 'Next.js', icon: <SiNextdotjs color="#ffffff" /> },
        { name: 'Vue.js', icon: <FaVuejs color="#4FC08D" /> },
        { name: 'PHP', icon: <FaPhp color="#777BB4" /> },
        { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
        { name: 'Python', icon: <FaPython color="#3776AB" /> },
        { name: 'Java', icon: <FaJava color="#007396" /> },
    ];

    // Duplicate the list to ensure seamless scrolling
    const marqueeSkills = [...skills, ...skills, ...skills];

    return (
        <section id="skills" className="section" style={{ backgroundColor: 'rgba(30, 41, 59, 0.3)', overflow: 'hidden' }}>
            <div className="container">
                <h2 className="section-title">Skills</h2>

                <div className="marquee-container">
                    <div className="marquee-content">
                        {marqueeSkills.map((skill, index) => (
                            <div key={`${skill.name}-${index}`} className="skill-item">
                                <span style={{ fontSize: '1.5rem', display: 'flex' }}>{skill.icon}</span>
                                <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
