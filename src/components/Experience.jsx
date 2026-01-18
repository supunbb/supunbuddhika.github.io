import { Link } from 'react-router-dom';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            company: "Tech Company A",
            period: "2023 - Present",
            roles: [
                {
                    title: "Senior UI/UX Engineer",
                    period: "2024 - Present",
                    responsibilities: [
                        "Lead redesign of core product dashboard.",
                        "Direct management of junior design team."
                    ]
                },
                {
                    title: "UI/UX Engineer",
                    period: "2023 - 2024",
                    responsibilities: [
                        "Established the initial design system.",
                        "Collaborated on cross-platform features."
                    ]
                }
            ]
        },
        {
            id: 2,
            company: "Creative Studio B",
            period: "2021 - 2023",
            roles: [
                {
                    title: "Junior UI Designer",
                    period: "2021 - 2023",
                    responsibilities: [
                        "Developed responsive interfaces.",
                        "Conducted usability testing."
                    ]
                }
            ]
        }
    ];

    return (
        <section className="container" style={{ padding: 'var(--section-padding) 0' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                <h2 className="heading-lg">Experience</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)', maxWidth: '900px', margin: '0 auto' }}>
                {experiences.map((exp) => (
                    <div key={exp.id} style={{
                        display: 'grid',
                        gridTemplateColumns: '250px 1fr',
                        gap: 'var(--spacing-lg)',
                        alignItems: 'start',
                        padding: 'var(--spacing-lg)',
                        backgroundColor: 'var(--card-bg)',
                        borderRadius: '12px',
                        border: '1px solid var(--border-color)'
                    }}>
                        {/* Company Identity */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', position: 'sticky', top: '20px' }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                backgroundColor: 'var(--border-color)',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 700 }}>LOGO</span>
                            </div>
                            <div>
                                <h3 className="h5" style={{ color: 'var(--text-primary)', lineHeight: 1.2 }}>{exp.company}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--fs-body-sm)', marginTop: '4px' }}>{exp.period}</p>
                            </div>
                        </div>

                        {/* Roles Timeline */}
                        <div style={{ position: 'relative' }}>
                            {exp.roles.map((role, rIndex) => (
                                <div key={rIndex} style={{
                                    position: 'relative',
                                    paddingLeft: exp.roles.length > 1 ? 'var(--spacing-lg)' : 0,
                                    marginBottom: rIndex === exp.roles.length - 1 ? 0 : 'var(--spacing-lg)'
                                }}>
                                    {/* Timeline Line & Dot */}
                                    {exp.roles.length > 1 && (
                                        <>
                                            <div style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: '8px',
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                backgroundColor: rIndex === 0 ? 'var(--accent-color)' : 'var(--border-color)',
                                                zIndex: 2
                                            }} />
                                            {rIndex !== exp.roles.length - 1 && (
                                                <div style={{
                                                    position: 'absolute',
                                                    left: '3.5px',
                                                    top: '16px',
                                                    bottom: '-32px',
                                                    width: '1px',
                                                    backgroundColor: 'var(--border-color)',
                                                    zIndex: 1
                                                }} />
                                            )}
                                        </>
                                    )}

                                    <h4 className="h6" style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>{role.title}</h4>
                                    <p style={{
                                        color: 'var(--accent-color)',
                                        fontSize: 'var(--fs-body-sm)',
                                        fontWeight: 500,
                                        marginBottom: 'var(--spacing-sm)'
                                    }}>
                                        {role.period}
                                    </p>
                                    <ul style={{
                                        paddingLeft: '20px',
                                        color: 'var(--text-secondary)',
                                        fontSize: 'var(--fs-body-md)',
                                        listStyleType: 'circle'
                                    }}>
                                        {role.responsibilities.map((item, index) => (
                                            <li key={index} style={{ marginBottom: '6px' }}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA removed as per user request */}
        </section>
    );
};

export default Experience;
