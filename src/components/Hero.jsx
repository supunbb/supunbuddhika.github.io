import { Link } from 'react-router-dom';
import content from '../data/content.json';

const Hero = () => {
    const { hero } = content;

    return (
        <section style={{
            position: 'relative',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            backgroundImage: 'url(/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden'
        }}>
            {/* 50% Opacity Black Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1
            }} />

            <div className="container" style={{
                position: 'relative',
                zIndex: 2,
                padding: 'var(--spacing-xl) var(--spacing-md)',
                width: '100%'
            }}>
                <h1 className="heading-xl" style={{ marginBottom: 'var(--spacing-sm)', color: '#ffffff' }}>{hero.title}</h1>
                <h2 className="heading-lg" style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: 'var(--spacing-md)' }}>{hero.subtitle}</h2>
                <p className="text-body" style={{ maxWidth: '600px', marginBottom: 'var(--spacing-lg)', color: 'rgba(255, 255, 255, 0.9)' }}>
                    {hero.description}
                </p>

                <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                    <Link to={hero.ctaPrimary.link} style={{
                        padding: '14px 32px',
                        backgroundColor: 'var(--accent-color)',
                        color: '#ffffff',
                        borderRadius: 'var(--radius-pill)',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        transition: 'transform 0.2s ease, opacity 0.2s',
                        display: 'inline-block'
                    }}
                        onMouseOver={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
                    >
                        {hero.ctaPrimary.text}
                    </Link>
                    <a href={hero.ctaSecondary.link} download style={{
                        padding: '14px 32px',
                        border: '1px solid #ffffff',
                        color: '#ffffff',
                        borderRadius: 'var(--radius-pill)',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        transition: 'background-color 0.2s ease, color 0.2s',
                        display: 'inline-block'
                    }}
                        onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#000000'; }}
                        onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#ffffff'; }}
                    >
                        {hero.ctaSecondary.text}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
