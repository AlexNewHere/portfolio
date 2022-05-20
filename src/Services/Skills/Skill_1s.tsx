import s from '../Services.module.css';
import icon from '../../logo/icon.jpg';
import React from 'react';

export function Skill_1s() {
    return <div className={s.card}>
        <div><img className={s.icon} src={icon} alt={'icon'}/></div>
        <div>
            <h5>Development</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.</p>
        </div>
    </div>;
}