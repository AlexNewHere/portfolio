import React from 'react';
import s from '../Project/Project.module.scss';
import cont from '../Common/Style/Container.module.scss';
import {CardProject} from './ProjectCard/CardProject';
import Title from '../Common/Title/Title';

const Projects = () => {
    return (
        <div className={cont.container + ' ' + s.project}>
            <Title title={'Projects'}/>
            <div className={s.place}>
                <CardProject/>
                <CardProject/>
                <CardProject/>
            </div>
        </div>
    );
};

export default Projects;