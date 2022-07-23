import React from 'react';
import s from './Main.module.css';
import cont from '../Common/Style/Container.module.scss';
import photo from '../logo/photo.jpg';

const Main = () => {
    return (
            <main className={cont.conteiner}>
                <div className={s.main}>
                <div className={s.mainPhoto}><img src={photo} alt={'mainPhoto'}/></div>
                <div className={s.mainText}>
                    <h5>INTRODUCTION</h5>
                    <h1>I'm Alex a Front end
                        <span> Developer &  React Software</span></h1>
                    <p>I design and develop services for customers of all sizes, specializing in creating stylish,
                        modern websites, web services and online stores. My passion is to design digital user
                        experiences through the bold interface and meaningful interactions.</p>
                </div>
                </div>
            </main>

    );
};

export default Main;