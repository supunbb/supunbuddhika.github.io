import React from 'react';

const Collaboration = () => {
    // Placeholder for company logos. 
    // In a real scenario, these would be <img> tags or SVG imports.
    const companies = [
        "Google", "Microsoft", "Spotify", "Amazon", "Uber"
    ];

    return (
        <section className="container" style={{ padding: 'var(--spacing-xl) var(--spacing-md)', textAlign: 'center' }}>
            <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--spacing-lg)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
            }}>
                Collaborated with
            </p>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 'var(--spacing-xl)',
                opacity: 0.7
            }}>
                {companies.map((company, index) => (
                    <div key={index} style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        // Simulating a logo look
                        filter: 'grayscale(100%)',
                        transition: 'opacity 0.3s ease',
                        cursor: 'default'
                    }}
                        className="company-logo"
                    >
                        {company}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Collaboration;
