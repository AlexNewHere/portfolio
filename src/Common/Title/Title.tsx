import React from 'react';
import s from './Title.module.scss';

type TitlePropsType = {
    title: string
}

const Title = ({title}: TitlePropsType) => {
    return (
        <div className={s.title}>
            <h1>{title}</h1>
        </div>
    );
};

export default Title;