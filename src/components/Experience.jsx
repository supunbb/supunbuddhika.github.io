const Experience = () => {
    const experiences = [
        {
            id: 1,
            company: "Tech Company A",
            role: "Senior UI/UX Engineer",
            period: "2023 - Present",
            responsibilities: [
                "Led the redesign of the core product dashboard, improving user engagement by 20%.",
                "Established a comprehensive design system used across 3 distinct product lines.",
                "Collaborated closely with developers to ensure pixel-perfect implementation of designs."
            ]
        },
        {
            id: 2,
            company: "Creative Studio B",
            role: "UI Engineer",
            period: "2021 - 2023",
            responsibilities: [
                "Developed responsive front-end interfaces for various client projects using React.",
                "Conducted user research and usability testing to inform design decisions.",
                "Optimized website performance and accessibility standards."
            ]
        }
    ];

    return (
        <section className="container" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-lg)' }}>Experience</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                {experiences.map((exp) => (
                    <div key={exp.id} style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr',
                        gap: 'var(--spacing-md)',
                        alignItems: 'start'
                    }}>
                        <div>
                            <h3 style={{ fontSize: '1.2rem' }}>{exp.company}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{exp.period}</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-sm)' }}>{exp.role}</h4>
                            <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)' }}>
                                {exp.responsibilities.map((item, index) => (
                                    <li key={index} style={{ marginBottom: '4px' }}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
