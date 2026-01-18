import React from 'react';
import { Link } from 'react-router-dom';
import { getAllProjects } from '../utils/projects';

const FeaturedCard = ({ project }) => {
    // Default sky blue background if no color is provided
    const cardBg = project.cardColor || '#e2f3ff';

    return (
        <Link to={`/case-study/${project.id}`} className="featured-card" style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            minHeight: '650px',
            padding: 'var(--spacing-xl)',
            borderRadius: '32px',
            overflow: 'hidden',
            backgroundColor: cardBg,
            // Subtle sky-like gradient
            backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.02) 100%)',
            textDecoration: 'none',
            color: '#000000',
            transition: 'transform 0.5s cubic-bezier(0.2, 1, 0.3, 1), box-shadow 0.5s ease',
            marginBottom: 'var(--spacing-xl)',
            border: '1px solid rgba(0,0,0,0.05)'
        }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 40px 80px rgba(0,0,0,0.12)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            {/* Visual Element (Mockup/Image) */}
            <div style={{
                position: 'absolute',
                top: '45%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(-4deg)',
                width: '85%',
                maxWidth: '700px',
                zIndex: 1,
                transition: 'transform 0.7s cubic-bezier(0.2, 1, 0.3, 1)'
            }} className="card-visual">
                <img
                    src={project.image}
                    alt={project.name}
                    style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '16px',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.2)'
                    }}
                />
            </div>

            {/* Bottom Content Overlay */}
            <div style={{ position: 'relative', zIndex: 10 }}>
                <h3 style={{
                    fontSize: 'var(--fs-h1)',
                    fontWeight: 700,
                    marginBottom: 'var(--spacing-sm)',
                    letterSpacing: '-0.02em',
                    color: '#000000'
                }}>
                    {project.name}
                </h3>
                <p style={{
                    fontSize: 'var(--fs-body-lg)',
                    color: 'rgba(0,0,0,0.75)',
                    maxWidth: '550px',
                    lineHeight: '1.4',
                    marginBottom: 'var(--spacing-lg)'
                }}>
                    {project.description}
                </p>

                {/* Metadata Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {Array.isArray(project.type) ? project.type.map((t, i) => (
                        <span key={i} style={{
                            padding: '10px 20px',
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            borderRadius: 'var(--radius-pill)',
                            fontSize: 'var(--fs-body-sm)',
                            fontWeight: 500,
                            color: '#000000',
                            backdropFilter: 'blur(8px)',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            border: '1px solid rgba(0,0,0,0.05)'
                        }}>
                            {t}
                        </span>
                    )) : (
                        <span style={{
                            padding: '10px 20px',
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            borderRadius: 'var(--radius-pill)',
                            fontSize: 'var(--fs-body-sm)',
                            fontWeight: 500,
                            color: '#000000',
                            backdropFilter: 'blur(8px)',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            border: '1px solid rgba(0,0,0,0.05)'
                        }}>
                            {project.type}
                        </span>
                    )}
                    {/* Category pill - now styled the same as others */}
                    <span style={{
                        padding: '10px 20px',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: 'var(--radius-pill)',
                        fontSize: 'var(--fs-body-sm)',
                        fontWeight: 500,
                        color: '#000000',
                        backdropFilter: 'blur(8px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        border: '1px solid rgba(0,0,0,0.05)'
                    }}>
                        {project.category}
                    </span>
                </div>
            </div>

            <style>{`
                .featured-card:hover .card-visual {
                    transform: translate(-50%, -55%) rotate(-2deg) scale(1.03) !important;
                }
                @media (max-width: 768px) {
                    .featured-card {
                        min-height: 500px !important;
                        padding: var(--spacing-lg) !important;
                    }
                    .card-visual {
                        width: 95% !important;
                        top: 40% !important;
                    }
                }
            `}</style>
        </Link>
    );
};


const FeaturedProjects = () => {
    const projects = getAllProjects();
    // Only display the first 3 projects
    const featuredProjects = projects.slice(0, 3);

    return (
        <section className="container" style={{ padding: 'var(--section-padding) 0' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                <h2 className="heading-lg">Featured Projects</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
                {featuredProjects.map(project => (
                    <FeaturedCard key={project.id} project={project} />
                ))}
            </div>

            {/* View All Projects button removed as per user request */}
        </section>
    );
};

export default FeaturedProjects;
