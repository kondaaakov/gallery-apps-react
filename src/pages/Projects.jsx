import React, { useState } from 'react'
import { projects as projectsArr } from '../utils/projects';
import ProjectsList from '../components/Projects/ProjectsList';

const Projects = () => {
    const [projects, setProjects] = useState(projectsArr);

    return (
        <div className='center'>
            <ProjectsList projects = {projects} />
        </div>
    )
}

export default Projects;