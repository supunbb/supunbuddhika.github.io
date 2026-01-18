import React from 'react';

const MetricsStrip = () => {
    const metrics = [
        { value: '16+', label: 'Projects Delivered' },
        { value: '2+', label: 'Years Experience' },
        { value: '4', label: 'Client Collaborations' }
    ];

    return (
        <section style={{
            backgroundColor: 'var(--bg-color)',
            padding: 'var(--spacing-xl) 0',
            borderBottom: '1px solid var(--border-color)'
        }}>
            <div className="container">
                <div className="metrics-grid" style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: 'var(--spacing-lg)'
                }}>
                    {metrics.map((metric, index) => (
                        <div key={index} style={{ flex: 1 }}>
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: 700,
                                color: 'var(--text-primary)',
                                marginBottom: 'var(--spacing-sm)',
                                lineHeight: 1
                            }}>
                                {metric.value}
                            </div>
                            <div style={{
                                fontSize: 'var(--fs-body-sm)',
                                color: 'var(--text-secondary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                fontWeight: 500
                            }}>
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .metrics-grid {
                        flex-direction: column !important;
                        gap: var(--spacing-xl) !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default MetricsStrip;
