import React from 'react';
import content from '../data/content.json';

const Contact = () => {
    const { contact } = content;

    return (
        <section style={{
            position: 'relative',
            backgroundColor: 'var(--bg-color)',
            padding: '160px 0',
            borderTop: '1px solid var(--border-color)'
        }}>
            <div className="container" style={{
                position: 'relative',
                zIndex: 2,
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                <h2 className="heading-xl" style={{ marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)' }}>{contact.title}</h2>
                <p className="text-body" style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--text-secondary)', fontSize: 'var(--fs-body-lg)' }}>
                    {contact.description}
                </p>

                <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <a
                        href="mailto:wwmsupunbbandara@gmail.com"
                        className="heading-md"
                        style={{
                            color: 'var(--accent-color)',
                            textDecoration: 'none',
                            fontWeight: 700,
                            display: 'inline-block',
                            transition: 'opacity 0.2s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                        onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                    >
                        wwmsupunbbandara@gmail.com
                    </a>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-lg)', marginTop: 'var(--spacing-md)' }}>
                    {contact.socials
                        .filter(social => ['LinkedIn', 'Behance'].includes(social.name))
                        .map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'var(--text-primary)', fontWeight: 500, borderBottom: '1px solid transparent', transition: 'border-color 0.2s', textDecoration: 'none' }}
                                onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--text-primary)'}
                                onMouseOut={(e) => e.currentTarget.style.borderColor = 'transparent'}
                            >
                                {social.name}
                            </a>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
