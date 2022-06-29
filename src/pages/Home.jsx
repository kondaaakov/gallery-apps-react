import React from 'react';
import { projects as projectsArr, getRandProject } from '../utils/projects';

const Home = () => {
    let randomProject = getRandProject(projectsArr);
    let tags = randomProject.tags.split(',')

    return (
        <div className='center home'>
            <section className='home-section'>
                <h1 className='home-title home-section-title title'>one-random-project</h1>
                <div className='home-block home-random'>
                    <div className='home-random-bcg'>
                        <div className='home-random-top'>
                            <h2 className='home-random-title'>{randomProject.title}</h2>
                            <p className='home-random-desc'>{randomProject.desc}</p>
                        </div>

                        <div className='home-random-bottom'>
                            <div className='home-random-tags'>
                                {tags.map((tag, index) => <p key={index} className='home-random-tag'>{tag}</p>)}
                            </div>
                            <a className='home-random-link' href={randomProject.link} target='_blank'>Посмотреть</a>
                        </div>
                    </div>
                </div>
            </section>
            

            <section className='home-section home-section-info'>
                <h1 className='home-title home-section-title title'>some-description</h1>
                <div className='home-block home-info'>
                    <h2 className='home-info-title'>gallery-apps-react</h2>
                    <p className='home-info-text'>Gallery Apps React - это карманная библиотека, которая позволяет ознакомиться с хорошими проектами и пакетами для React.js, а также получить немного информации по тому "Как что делать?"</p>
                </div>
            </section>
        </div>
    )
}

export default Home;