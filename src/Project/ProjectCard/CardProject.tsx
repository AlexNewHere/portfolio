import s from './Card.module.scss';
import React from 'react';

type ProjectsPropsType = {
    title: string,
    description: string,
    url: string,
    image: string
}

export function CardProject({url, title, description, image}:ProjectsPropsType) {
    return (
        <a href={url} rel="noreferrer" target="_blank">
        <div className={s.card}>
            <div className={s.cardPlace}>
                <img src={image} alt={'project'}/>
            </div>
            <div className={s.cardInfo}>
                <h3>{title}</h3>
                <h5>{description}</h5>
            </div>
        </div>
        </a>
    );
}