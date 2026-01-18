import React from 'react';
import content from '../data/content.json';

const Contact = () => {
    const { contact } = content;

    return (
        <section className="container" style={{ padding: 'var(--spacing-xl) 0', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 className="heading-lg" style={{ marginBottom: 'var(--spacing-md)' }}>{contact.title}</h2>
            <p className="text-body" style={{ marginBottom: 'var(--spacing-lg)' }}>
                {contact.description}
            </p>

            <a
                href={`mailto:${contact.cta.email}`}
                style={{
                    display: 'inline-block',
                    padding: '16px 40px',
                    backgroundColor: 'var(--accent-color)',
                    color: '#ffffff',
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    borderRadius: 'var(--radius-pill)',
                    fontWeight: 600,
                    marginBottom: 'var(--spacing-xl)',
                    transition: 'transform 0.2s ease, opacity 0.2s ease'
                }}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.opacity = '0.9'; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1'; }}
            >
                {contact.cta.text}
            </a>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-lg)', marginTop: 'var(--spacing-md)' }}>
                {contact.socials.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-primary)', fontWeight: 500, borderBottom: '1px solid transparent', transition: 'border-color 0.2s' }}
                        onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--text-primary)'}
                        onMouseOut={(e) => e.currentTarget.style.borderColor = 'transparent'}
                    >
                        {social.name}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Contact;
