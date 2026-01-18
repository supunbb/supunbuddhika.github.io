import { Link } from 'react-router-dom';
import content from '../data/content.json';

const Hero = () => {
    const { hero } = content;

    return (
        <section style={{
            position: 'relative',
            height: '90vh',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'var(--bg-color)',
            overflow: 'hidden'
        }}>
            <div className="container" style={{
                position: 'relative',
                zIndex: 2,
                padding: 'var(--spacing-md)',
                width: '100%'
            }}>
                <div className="hero-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 0.8fr',
                    gap: 'var(--spacing-xl)',
                    alignItems: 'center'
                }}>
                    {/* Left Column: Content */}
                    <div>
                        <h1 className="heading-xl" style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--text-primary)' }}>{hero.title}</h1>
                        <h2 className="heading-lg" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>{hero.subtitle}</h2>
                        <p className="text-body" style={{ maxWidth: '600px', marginBottom: 'var(--spacing-lg)', color: 'var(--text-secondary)' }}>
                            {hero.description}
                        </p>
                        {/* Buttons removed as per user request */}
                    </div>

                    {/* Right Column: Hero Visual */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{
                            width: '400px',
                            height: '400px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--card-bg)',
                            border: '1px solid var(--border-color)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
                        }}>
                            <img
                                src="/profile.png"
                                alt="Supun"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 992px) {
                    section { height: auto !important; padding: 120px 0 60px 0 !important; }
                    .hero-grid { 
                        grid-template-columns: 1fr !important;
                        text-align: center;
                    }
                    .hero-grid > div:first-child { order: 2; }
                    .hero-grid > div:last-child { 
                        order: 1; 
                        margin-bottom: var(--spacing-lg);
                    }
                    .hero-grid div[style*="width: 400px"] {
                        width: 280px !important;
                        height: 280px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
