import React, { useState } from 'react';
import ProjectsList from '../components/Projects/ProjectsList';

const Projects = () => {
    const [projects, setProjects] = useState([
        {id: 1, title: 'React Router', desc: 'React Router is a lightweight, fully-featured routing library for the React JavaScript library. React Router runs everywhere that React runs; on the web, on the server (using node.js), and on React Native.', link: 'https://v5.reactrouter.com/web/guides/quick-start', tags: 'react, router'},
        {id: 2, title: 'React Spectrum', desc: 'React Spectrum is a React implementation of Spectrum, Adobe\'s design system. It provides components that are adaptive to interactions and screen sizes across devices, and includes full screen reader and keyboard navigation support for accessibility.', link: 'https://react-spectrum.adobe.com/react-spectrum/getting-started.html', tags: 'react, UI'},
        {id: 3, title: 'Radix', desc: 'Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience. You can use these components either as the base layer of your design system, or adopt them incrementally.', link: 'https://www.radix-ui.com/', tags: 'react, UI'},
        {id: 4, title: 'Radix', desc: 'Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience. You can use these components either as the base layer of your design system, or adopt them incrementally.', link: 'https://www.radix-ui.com/', tags: 'react, UI'},
    ]);

    return (
        <div className='center'>
            <ProjectsList projects = {projects} />
        </div>
    )
}

export default Projects;