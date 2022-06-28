import React from 'react';

const Project = (props) => {
    let tags = props.project.tags.split(',')

    return (
        <div className='project'>
            <div className='project-top'>
                <h2 className='project-title'>{props.project.title}</h2>
                <p className='project-desc'>{props.project.desc}</p>
            </div>

            <div className='project-bottom'>
                <div className='project-tags'>
                    {tags.map((tag, index) => 
                       <p key={index} className='project-tag'>{tag}</p>
                    )}
                </div>
                <a className='project-link' href={props.project.link} target='_blank'>Посмотреть</a>
            </div>
            
        </div>
    )
}

export default Project;