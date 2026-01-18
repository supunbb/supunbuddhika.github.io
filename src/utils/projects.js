export const getAllProjects = () => {
    const modules = import.meta.glob('../data/projects/*.json', { eager: true });
    return Object.values(modules).map((mod) => mod.default); // Ensure accessing default export from JSON modules
};

export const getProjectById = (id) => {
    const projects = getAllProjects();
    return projects.find((p) => p.id === id);
};
