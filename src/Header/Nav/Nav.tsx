import React from 'react';
import s from './Nav.module.css';
import logo from '../../logo/logo.svg';

const Navbar = () => {
    return (
        <div className={s.link}>
            <img src={logo} className={s.logo} alt={'logo'}/>
            <div className={s.conteiner}>

                <a href='#home' className={s.navLink} >Home</a>
                <a href='#about' className={s.navLink}>About us</a>
                <a href='#services' className={s.navLink}>Services</a>
                <a href='#project' className={s.navLink}>Project</a>
                <a href='#contact' className={s.navLink}>Contact</a>

            {/*    <span>Home</span>*/}
            {/*<span>About us</span>*/}
            {/*<span>My skills</span>*/}
            {/*<span>Project</span>*/}
            {/*<span>Contact</span>*/}
            </div>
        </div>
    );
};

export default Navbar;