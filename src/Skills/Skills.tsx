import React from 'react';
import s from './Skills.module.scss';
import cont from '../Common/Style/Container.module.scss';
import css from '../logo/icons/css.png'
import html from '../logo/icons/html.png'
import js from '../logo/icons/js.png'
import react from '../logo/icons/react.png'
import redux from '../logo/icons/redux.png'
import ts from '../logo/icons/typescript.png'
import git from '../logo/icons/git.png'
import github from '../logo/icons/github.png'
import sass from '../logo/icons/sass.png'
import Skill from '../Skills/skill/Skill';
import Title from '../Common/Title/Title';

const Skills = () => {
    const skills = [
        {id: 1, title: 'React', icon: react},
        {id: 2, title: 'Redux', icon: redux},
        {id: 3, title: 'JavaScript', icon: js},
        {id: 4, title: 'TypeScript', icon: ts},
        {id: 5, title: 'HTML', icon: html},
        {id: 6, title: 'CSS', icon: css},
        {id: 7, title: 'Git', icon: git},
        {id: 8, title: 'Github', icon: github},
        {id: 9, title: 'Sass/Scss', icon: sass},
    ];
    return (
        <div className={cont.container + ' ' + s.about}>
            <Title title={'Skills'}/>
            <div className={s.mainSkills}>
                {skills.map(skill=>
                <Skill
                    key={skill.id.toString()+skill.title}
                    title={skill.title}
                    icon={skill.icon}/>
                )}
            </div>
        </div>

    );
};

export default Skills;