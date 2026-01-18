import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById, getAllProjects } from '../utils/projects';

const CaseStudy = () => {
    const { id } = useParams();

    // Fetch project data based on the string ID (slug)
    const data = getProjectById(id);
    const projects = getAllProjects();

    // Handle Previous/Next logic
    const currentIndex = projects.findIndex(p => p.id === id);
    const activeIndex = currentIndex !== -1 ? currentIndex : 0;
    const prevProject = projects[activeIndex === 0 ? projects.length - 1 : activeIndex - 1];
    const nextProject = projects[activeIndex === projects.length - 1 ? 0 : activeIndex + 1];

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Style constants for this page to keep it self-contained
    const SECTION_STYLE = { marginBottom: 'var(--spacing-xl)', maxWidth: '800px' };
    const HEADING_STYLE = { fontSize: 'var(--fs-xl)', fontWeight: 'var(--fw-medium)', marginBottom: 'var(--spacing-md)', letterSpacing: 'var(--ls-tight)' };
    const TEXT_STYLE = { fontSize: 'var(--fs-base)', color: 'var(--text-secondary)', lineHeight: 'var(--lh-base)' };

    if (!data) {
        return (
            <div className="container" style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>
                <h1 className="heading-xl">Project Not Found</h1>
                <Link to="/" style={{ color: 'var(--accent-color)' }}>Return Home</Link>
            </div>
        );
    }

    return (
        <article className="container" style={{ padding: 'var(--spacing-xl) var(--spacing-md)', maxWidth: '1000px', margin: '0 auto' }}>
            {/* Navigation */}
            <Link to="/" style={{
                display: 'inline-block',
                marginBottom: 'var(--spacing-xl)',
                color: 'var(--text-secondary)',
                fontWeight: 500,
                textDecoration: 'none'
            }}>
                &larr; Back to Projects
            </Link>

            {/* 1. Hero */}
            <header style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
                <div style={{ textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-sm)' }}>
                    {data.category}
                </div>
                <h1 className="heading-xl" style={{ marginBottom: 'var(--spacing-md)', lineHeight: 1.1 }}>
                    {data.name}
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto var(--spacing-lg)' }}>
                    {data.description}
                </p>
                <div style={{
                    width: '100%',
                    height: '500px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img src={data.heroImage || data.image} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </header>

            {/* 2. Project Overview */}
            {data.overview && (
                <section style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: 'var(--spacing-lg)',
                    borderTop: '1px solid var(--border-color)',
                    borderBottom: '1px solid var(--border-color)',
                    padding: 'var(--spacing-lg) 0',
                    marginBottom: 'var(--spacing-xl)'
                }}>
                    {Object.entries(data.overview).map(([key, value]) => (
                        <div key={key}>
                            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>{key}</h4>
                            <div style={{ fontSize: '1rem', fontWeight: 500 }}>{value}</div>
                        </div>
                    ))}
                </section>
            )}

            {/* Main Content Layout - Centered with max-width for readability */}
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                {/* 3. Context & Background */}
                {data.context && (
                    <section style={SECTION_STYLE}>
                        <h2 style={HEADING_STYLE}>Context & Background</h2>
                        <p style={TEXT_STYLE}>{data.context.description}</p>
                        <div style={{ marginTop: 'var(--spacing-md)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
                            <div>
                                <h4 style={{ fontSize: '0.9rem' }}>Users</h4>
                                <p style={TEXT_STYLE}>{data.context.users}</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '0.9rem' }}>Usage Environment</h4>
                                <p style={TEXT_STYLE}>{data.context.usage}</p>
                            </div>
                        </div>
                    </section>
                )}

                {/* 4. Problem Statement */}
                {data.problem && (
                    <section style={SECTION_STYLE}>
                        <h2 style={HEADING_STYLE}>The Problem</h2>
                        <p style={{ ...TEXT_STYLE, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 'var(--spacing-md)' }}>
                            {data.problem.statement}
                        </p>
                        <p style={TEXT_STYLE}>{data.problem.core}</p>
                        <ul style={{ ...TEXT_STYLE, marginTop: 'var(--spacing-md)', paddingLeft: '20px' }}>
                            {data.problem.painPoints.map((point, i) => (
                                <li key={i} style={{ marginBottom: '8px' }}>{point}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* 5. Goals */}
                {data.goals && (
                    <section style={SECTION_STYLE}>
                        <h2 style={HEADING_STYLE}>Goals & Success Criteria</h2>
                        <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
                            <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--card-bg)', borderRadius: '8px' }}>
                                <h4 style={{ marginBottom: '4px' }}>Primary Goal</h4>
                                <p style={TEXT_STYLE}>{data.goals.primary}</p>
                            </div>
                            <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--card-bg)', borderRadius: '8px' }}>
                                <h4 style={{ marginBottom: '4px' }}>Success Metrics</h4>
                                <p style={TEXT_STYLE}>{data.goals.success}</p>
                            </div>
                        </div>
                    </section>
                )}

                {/* 6. Constraints */}
                {data.constraints && (
                    <section style={SECTION_STYLE}>
                        <h2 style={HEADING_STYLE}>Constraints</h2>
                        <ul style={{ ...TEXT_STYLE, paddingLeft: '20px' }}>
                            {data.constraints.map((c, i) => <li key={i} style={{ marginBottom: '8px' }}>{c}</li>)}
                        </ul>
                    </section>
                )}

                {/* 7. Design Decisions */}
                {data.decisions && (
                    <section style={SECTION_STYLE}>
                        <h2 style={HEADING_STYLE}>Key Design Decisions</h2>
                        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
                            {data.decisions.map((d, i) => (
                                <div key={i}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{d.title}</h3>
                                    <p style={TEXT_STYLE}>{d.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* 8. UX Flow */}
                {data.uxFlow && (
                    <section style={SECTION_STYLE}>
                        <h2 style={HEADING_STYLE}>UX Flow & System Thinking</h2>
                        <p style={TEXT_STYLE}>
                            <strong>Primary Flow:</strong> {data.uxFlow.primary}
                        </p>
                        <p style={{ ...TEXT_STYLE, marginTop: '8px' }}>
                            <strong>Handling Edges:</strong> {data.uxFlow.edge}
                        </p>
                    </section>
                )}

            </div>

            {/* 9. Design Solution - Full Width Images */}
            {data.solution && (
                <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <h2 style={{ ...HEADING_STYLE, maxWidth: '800px', margin: '0 auto var(--spacing-lg) auto' }}>Design Solution</h2>
                    <div style={{ display: 'grid', gap: 'var(--spacing-xl)' }}>
                        {data.solution.map((s, i) => (
                            <div key={i}>
                                <div style={{
                                    backgroundColor: '#FAFAFA',
                                    padding: 'var(--spacing-lg)',
                                    borderRadius: '16px',
                                    marginBottom: 'var(--spacing-md)',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <img src={s.image} alt={s.title} style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }} />
                                </div>
                                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{s.title}</h3>
                                    <p style={TEXT_STYLE}>{s.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Remaining Sections Centered */}
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                {/* 10. System */}
                {data.system && (
                    <section style={SECTION_STYLE}>
                        <h2 style={HEADING_STYLE}>System Implementation</h2>
                        <p style={TEXT_STYLE}>
                            Built on a token-based system: {data.system.tokens}<br />
                            Structure: {data.system.structure}
                        </p>
                    </section>
                )}

                {/* 11. Outcome */}
                {data.outcome && (
                    <section style={SECTION_STYLE}>
                        <h2 style={HEADING_STYLE}>Outcome & Impact</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
                            {data.outcome.impact && (
                                <div style={{ padding: 'var(--spacing-lg)', backgroundColor: '#E3F2FD', borderRadius: '8px', color: '#0D47A1' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '4px' }}>Impact</div>
                                    <div style={{ fontSize: '0.9rem' }}>{data.outcome.impact}</div>
                                </div>
                            )}
                            {data.outcome.efficiency && (
                                <div style={{ padding: 'var(--spacing-lg)', backgroundColor: '#E8F5E9', borderRadius: '8px', color: '#1B5E20' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '4px' }}>Efficiency</div>
                                    <div style={{ fontSize: '0.9rem' }}>{data.outcome.efficiency}</div>
                                </div>
                            )}
                        </div>
                        <blockquote style={{
                            borderLeft: '4px solid var(--text-primary)',
                            paddingLeft: 'var(--spacing-md)',
                            fontSize: '1.25rem',
                            fontStyle: 'italic',
                            margin: 'var(--spacing-lg) 0'
                        }}>
                            {data.outcome.quote}
                        </blockquote>
                    </section>
                )}

                {/* 12. Learnings */}
                {data.learnings && (
                    <section style={SECTION_STYLE}>
                        <h2 style={HEADING_STYLE}>Learnings</h2>
                        <ul style={{ ...TEXT_STYLE, paddingLeft: '20px' }}>
                            {data.learnings.map((l, i) => <li key={i} style={{ marginBottom: '8px' }}>{l}</li>)}
                        </ul>
                    </section>
                )}

                {/* 13. Next Steps */}
                <section style={SECTION_STYLE}>
                    <h2 style={HEADING_STYLE}>Next Steps</h2>
                    <p style={TEXT_STYLE}>
                        Future iterations will focus on...
                    </p>
                </section>

            </div>

            <nav style={{
                marginTop: 'var(--spacing-xl)',
                paddingTop: 'var(--spacing-xl)',
                borderTop: '1px solid var(--border-color)',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Link to={`/case-study/${prevProject.id}`} style={{ fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none', color: 'var(--text-primary)' }}>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>&larr; Previous</span>
                    {prevProject.name}
                </Link>
                <Link to={`/case-study/${nextProject.id}`} style={{ fontSize: '1.1rem', fontWeight: 600, textAlign: 'right', textDecoration: 'none', color: 'var(--text-primary)' }}>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>Next &rarr;</span>
                    {nextProject.name}
                </Link>
            </nav>
        </article>
    );
};

export default CaseStudy;
