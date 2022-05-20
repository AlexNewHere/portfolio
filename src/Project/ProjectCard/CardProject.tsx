import s from './Card.module.css';
import React from 'react';
import project from '../../logo/project.jpg';


export function CardProject() {
    return <div className={s.card}>
        <div className={s.cardPlace}>
            <img src={project} alt={'project'}/>
        </div>
        <div className={s.cardInfo}>
            <h3>React</h3>
           <p>application</p>
        </div>
    </div>;
}