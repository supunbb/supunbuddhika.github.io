const Footer = () => {
    return (
        <footer style={{ padding: 'var(--spacing-lg) 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="text-secondary">
                    &copy; {new Date().getFullYear()} Supun.
                </div>
                <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                    <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Behance</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
