import React from 'react';
import { Link } from 'react-router-dom';
import { getAllProjects } from '../utils/projects';

const FeaturedCard = ({ project }) => {
    return (
        <div className="featured-card" style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', // Two equal columns
            gap: 'var(--spacing-xl)',
            marginBottom: 'var(--spacing-xl)',
            alignItems: 'center',
            backgroundColor: 'var(--card-bg)', // Optional: subtle background for the whole card if needed, or keeping it clean
            borderRadius: '16px',
            overflow: 'hidden'
        }}>
            {/* Left Column: Content */}
            <div style={{ padding: 'var(--spacing-lg)' }}>
                <h3 className="heading-lg" style={{
                    marginBottom: 'var(--spacing-sm)',
                    lineHeight: 1.1
                }}>
                    {project.name}
                </h3>

                <div style={{
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--spacing-md)'
                }}>
                    {project.category}
                </div>

                <p className="text-body" style={{
                    marginBottom: 'var(--spacing-md)',
                    maxWidth: '90%'
                }}>
                    {project.description}
                </p>

                {/* Product Type (Two Lines) */}
                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                    {Array.isArray(project.type) ? project.type.map((line, idx) => (
                        <div key={idx} style={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: 'var(--text-primary)',
                            lineHeight: 1.4
                        }}>
                            {line}
                        </div>
                    )) : (
                        <div style={{ fontSize: '1rem', fontWeight: 500 }}>{project.type}</div>
                    )}
                    <span style={{
                        display: 'block',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        marginTop: '8px'
                    }}>
                        {project.year}
                    </span>
                </div>

                <Link to={`/case-study/${project.id}`} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--accent-color)',
                    textDecoration: 'none',
                    marginTop: 'var(--spacing-sm)'
                }}>
                    View Case Study <span style={{ marginLeft: '8px' }}>&rarr;</span>
                </Link>
            </div>

            {/* Right Column: Visual */}
            <div style={{ height: '400px', width: '100%' }}>
                <img
                    src={project.image}
                    alt={project.name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '16px', // Rounded corners as requested
                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)' // Subtle shadow, not heavy
                    }}
                />
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .featured-card {
                        grid-template-columns: 1fr !important;
                        gap: var(--spacing-md) !important;
                    }
                    .featured-card > div:nth-child(2) {
                        height: 250px !important;
                        order: -1; /* Image on top on mobile */
                    }
                }
            `}</style>
        </div>
    );
};

const FeaturedProjects = () => {
    const projects = getAllProjects();
    // Only display the first 3 projects
    const featuredProjects = projects.slice(0, 3);

    return (
        <section className="container" style={{ padding: 'var(--spacing-xl) 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 'var(--spacing-xl)' }}>
                <h2 className="heading-xl">Featured Projects</h2>
                <Link to="/projects" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>View All Projects</Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
                {featuredProjects.map(project => (
                    <FeaturedCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProjects;
