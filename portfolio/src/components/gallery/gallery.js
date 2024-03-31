import React from 'react';
import { Link } from 'react-router-dom';
import './gallery.css'; 
import projects from '../projects';


const ProjectItem = ({ title, description, imageUrl, projectLink }) => {
    return (
        <div className="project-item" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={projectLink}>View Project</Link>
            </div>
        </div>
    );
};

const ProjectGallery = () => {
    return (
        <div className="project-gallery">
            {projects.map(project => (
                <ProjectItem key={project.id} {...project} />
            ))}
        </div>
    );
};

export default ProjectGallery;
