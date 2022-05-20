import React from 'react';
import s from './Services.module.css';
import cont from '../Common/Style/Container.module.css';
import {Skill_1s} from './Skills/Skill_1s';

const Services = () => {
    return (
        <div className={cont.conteiner + ' ' + s.services}>
            <div className={s.mainText}>
                <h2>MY SERVICES</h2>
            </div>
            <div className={s.place}>
                <Skill_1s/>
                <Skill_1s/>
                <Skill_1s/>
                <Skill_1s/>
                <Skill_1s/>
                <Skill_1s/>
            </div>
        </div>
    );
};

export default Services;