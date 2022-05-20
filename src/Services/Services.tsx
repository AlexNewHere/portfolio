import React from 'react';
import s from './Services.module.css';
import cont from '../Common/Style/Container.module.css';
import icon from '../logo/icon.jpg';

const Services = () => {
    return (

        <div className={cont.conteiner+' '+ s.services}>

                <div className={s.mainText} >
                    <h2>MY SERVICES</h2>
                </div>
                <div className={s.place}>
                    <div className={s.card}>
                        <div><img className={s.icon} src={icon} alt={'icon'}/></div>
                        <div>
                            <h5>Development</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className={s.card}>
                        <div><img className={s.icon} src={icon} alt={'icon'}/></div>
                        <div>
                            <h5>Development</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className={s.card}>
                        <div><img className={s.icon} src={icon} alt={'icon'}/></div>
                        <div>
                            <h5>Development</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className={s.card}>
                        <div><img className={s.icon} src={icon} alt={'icon'}/></div>
                        <div>
                            <h5>Development</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className={s.card}>
                        <div><img className={s.icon} src={icon} alt={'icon'}/></div>
                        <div>
                            <h5>Development</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className={s.card}>
                        <div><img className={s.icon} src={icon} alt={'icon'}/></div>
                        <div>
                            <h5>Development</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>



                </div>

        </div>

    );
};

export default Services;