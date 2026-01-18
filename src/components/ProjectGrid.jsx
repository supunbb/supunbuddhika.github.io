import React from 'react';
import { Link } from 'react-router-dom';
import { getAllProjects } from '../utils/projects';


const ProjectCard = ({ project }) => {
    return (
        <Link to={`/case-study/${project.id}`}
            style={{
                position: 'relative',
                display: 'block',
                overflow: 'hidden',
                borderRadius: '8px',
                aspectRatio: '16 / 9', // YouTube thumbnail ratio
                textDecoration: 'none'
            }}
            className="nbc-card"
        >
            {/* Background Image */}
            <div
                className="card-image-container"
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    transition: 'transform 0.4s ease'
                }}
            >
                <img
                    src={project.image}
                    alt={project.name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
                {/* Dark Gradient Overlay for text readability */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '80%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)',
                    zIndex: 2
                }}></div>
            </div>

            {/* Content Layer */}
            <div style={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                height: '100%',
                padding: 'var(--spacing-md)'
            }}>
                {/* Bottom Info */}
                <div>
                    <h3 style={{
                        color: '#fff',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        marginBottom: '4px',
                        lineHeight: 1.2
                    }}>
                        {project.name}
                    </h3>
                    <span style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.9rem',
                        fontWeight: 500
                    }}>
                        {project.year}
                    </span>
                </div>
            </div>

            {/* Hover Bottom Bar */}
            <div className="hover-bar" style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '4px',
                backgroundColor: 'var(--accent-color)',
                zIndex: 20,
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.3s ease'
            }}></div>

            <style>{`
                .nbc-card:hover .card-image-container {
                    transform: scale(1.05);
                }
                .nbc-card:hover .hover-bar {
                    transform: scaleX(1);
                }
            `}</style>
        </Link>
    );
};

const ProjectGrid = () => {
    const projects = getAllProjects();
    return (
        <section className="container" style={{ paddingBottom: 'var(--spacing-xl)' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: 'var(--spacing-lg)'
            }}>
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectGrid;
