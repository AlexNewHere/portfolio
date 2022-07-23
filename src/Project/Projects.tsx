import React from 'react';
import s from './Project.module.css';
import cont from '../Common/Style/Container.module.scss';
import {CardProject} from './ProjectCard/CardProject';

const Projects = () => {
    return (
        <div className={cont.conteiner + ' ' + s.project}>
            <div className={s.mainText}>
                <h2>MY PROJECTS</h2>
            </div>
            <div className={s.place}>
                <CardProject/>
                <CardProject/>
                <CardProject/>
            </div>
        </div>
    );
};

export default Projects;