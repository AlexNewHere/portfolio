import React from 'react';
import s from '../Project/Project.module.scss';
import cont from '../Common/Style/Container.module.scss';
import {CardProject} from './ProjectCard/CardProject';
import Title from '../Common/Title/Title';
import toDo from '../logo/project/toDo.png'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Card',
            description: 'React / Redux Toolkit / TypeScript / Axios / Formik / MUI / React-router-dom',
            url: 'https://github.com/AlexNewHere/counter',
            image: `${toDo}`
        },
        {
            id: 2,
            title: 'To-Do List',
            description: 'React / TypeScript / MUI / Storybook / Redux / Redux-Thunk / Axios / Formik / React-router-dom / Unit tests',
            url: 'https://github.com/AlexNewHere/todo-list',
            image: `${toDo}`
        },
        {
            id: 3,
            title: 'Social network',
            description: 'React / Redux Toolkit / TypeScript / MUI / Axios / React hook form / React-router-dom',
            url: 'https://github.com/AlexNewHere/samurai-way',
            image: `${toDo}`
        },
        {
            id: 4,
            title: 'Counter',
            description: 'TypeScript / React / Redux / Redux Toolkit',
            url: 'https://github.com/AlexNewHere/counter',
            image: `${toDo}`
        },
    ]
    return (
        <div className={cont.container + ' ' + s.project}>
            <Title title={'Projects'}/>
            <div className={s.place}>
                {projects.map(el=> {
                    return (
                        <CardProject  key={el.id}
                                      title={el.title}
                                      description={el.description}
                                      url={el.url}
                                      image={el.image}/>
                    )
                })}
            </div>
        </div>
    );
};

export default Projects;