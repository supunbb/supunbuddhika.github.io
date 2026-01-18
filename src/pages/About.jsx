import React from 'react';
import aboutData from '../data/about.json';
import { Link } from 'react-router-dom';

const SectionHeader = ({ title }) => (
    <div style={{ marginBottom: 'var(--spacing-lg)', borderLeft: '4px solid var(--accent-color)', paddingLeft: 'var(--spacing-md)' }}>
        <h2 className="heading-lg">{title}</h2>
    </div>
);

const ListItem = ({ title, subtitle, period, description }) => (
    <div style={{
        marginBottom: 'var(--spacing-lg)',
        padding: 'var(--spacing-md)',
        border: '1px solid var(--border-color)',
        borderRadius: '4px',
        backgroundColor: 'var(--card-bg)',
        transition: 'transform 0.2s',
    }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: 'var(--spacing-sm)' }}>
            <h3 style={{ fontSize: 'var(--fs-h5)', fontWeight: 600, color: 'var(--text-primary)' }}>{title}</h3>
            {period && <span style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{period}</span>}
        </div>
        {subtitle && <div style={{ color: 'var(--accent-color)', fontWeight: 500, marginBottom: 'var(--spacing-sm)', fontSize: 'var(--fs-body-md)' }}>{subtitle}</div>}
        <p className="text-body" style={{ fontSize: 'var(--fs-body-md)' }}>{description}</p>
    </div>
);

const About = () => {
    const { hero, experience, education, competitions, volunteer, banner } = aboutData;

    return (
        <div>
            {/* Hero Section */}
            <section className="container" style={{ padding: 'var(--section-padding) 0', maxWidth: '800px' }}>
                <h1 className="heading-xl" style={{ marginBottom: 'var(--spacing-md)' }}>{hero.title}</h1>
                <h2 className="heading-lg" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>{hero.subtitle}</h2>
                <p className="text-body" style={{ fontSize: 'var(--fs-body-lg)', lineHeight: '1.8' }}>
                    {hero.description}
                </p>
            </section>

            <div className="container" style={{ maxWidth: '800px', paddingBottom: 'var(--section-padding)' }}>

                {/* Experience Section */}
                <section style={{ marginBottom: 'var(--section-padding)' }}>
                    <SectionHeader title="Experience" />
                    {experience.map(item => (
                        <ListItem
                            key={item.id}
                            title={item.role}
                            subtitle={item.company}
                            period={item.period}
                            description={item.description}
                        />
                    ))}
                </section>

                {/* Education Section */}
                <section style={{ marginBottom: 'var(--section-padding)' }}>
                    <SectionHeader title="Education" />
                    {education.map(item => (
                        <ListItem
                            key={item.id}
                            title={item.degree}
                            subtitle={item.institution}
                            period={item.period}
                            description={item.description}
                        />
                    ))}
                </section>

                {/* Competitions Section */}
                <section style={{ marginBottom: 'var(--section-padding)' }}>
                    <SectionHeader title="Competitions & Awards" />
                    {competitions.map(item => (
                        <ListItem
                            key={item.id}
                            title={item.title}
                            subtitle={item.organizer}
                            description={item.description}
                        />
                    ))}
                </section>

                {/* Volunteer Section */}
                <section style={{ marginBottom: 'var(--section-padding)' }}>
                    <SectionHeader title="Volunteer Work" />
                    {volunteer.map(item => (
                        <ListItem
                            key={item.id}
                            title={item.role}
                            subtitle={item.organization}
                            period={item.period}
                            description={item.description}
                        />
                    ))}
                </section>

            </div>

            {/* Final Banner */}
            <section style={{
                backgroundColor: 'var(--card-bg)',
                padding: 'var(--section-padding) 0',
                textAlign: 'center',
                borderTop: '1px solid var(--border-color)',
                borderBottom: '1px solid var(--border-color)'
            }}>
                <div className="container">
                    <h2 className="heading-lg" style={{ marginBottom: 'var(--spacing-md)' }}>{banner.title}</h2>
                    <a href={banner.link} download style={{
                        display: 'inline-block',
                        padding: '16px 40px',
                        backgroundColor: 'var(--accent-color)',
                        color: '#ffffff',
                        borderRadius: 'var(--radius-pill)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginTop: 'var(--spacing-md)',
                        transition: 'transform 0.2s'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        {banner.cta}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;
