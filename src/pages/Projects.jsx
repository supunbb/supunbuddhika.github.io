import ProjectGrid from '../components/ProjectGrid';

const Projects = () => {
    return (
        <div style={{ paddingTop: 'var(--spacing-xl)' }}>
            <div className="container" style={{ marginBottom: 'var(--spacing-lg)' }}>
                <h1 style={{ marginBottom: 'var(--spacing-md)' }}>All Projects</h1>
                <p style={{ maxWidth: '600px', color: 'var(--text-secondary)' }}>
                    A selection of my work in UI/UX engineering, displaying a range of problems and solutions.
                </p>
            </div>
            <ProjectGrid />
        </div>
    );
};

export default Projects;
