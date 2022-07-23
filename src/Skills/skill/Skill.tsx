import React from 'react';
import style from './Skill.module.scss';

type SkillPropsType = {
    title: string,
    icon: string
}

const Skill = ({title, icon}: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <img src={icon} alt={'skillImage'}/>
            <h3>{title}</h3>
        </div>
    );
};

export default Skill;