import React from 'react';
import s from './Services.module.css';
import cont from '../Common/Style/Container.module.scss';
import {Skill1s} from './Skills/Skill1s';

const Services = () => {
    return (
        <div className={cont.conteiner + ' ' + s.services}>
            <div className={s.mainText}>
                <h2>MY SERVICES</h2>
            </div>
            <div className={s.place}>
                <Skill1s/>
                <Skill1s/>
                <Skill1s/>
                <Skill1s/>
                <Skill1s/>
                <Skill1s/>
            </div>
        </div>
    );
};

export default Services;