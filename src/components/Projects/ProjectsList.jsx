import React from 'react';
import AttentionMessage from '../UI/errorMessage/AttentionMessage';
import Project from './Project';

const ProjectsList = ({projects}) => {
    if (!projects.length) {
        return (
            <AttentionMessage>Не найдено ни одной записи 🙁</AttentionMessage>
        )
    }

    return (
        <div className='projects'>
            {projects.map((project) => 
                <Project key={project.id} project={project} />
            )}
        </div>
    )
}

export default ProjectsList;