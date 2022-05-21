import React from 'react';
import s from './Nav.module.css';
import logo from '../../logo/logo.svg';
import {HashLink} from 'react-router-hash-link';

const Navbar = () => {
    return (
        <div className={s.link}>
            <img src={logo} className={s.logo} alt={'logo'}/>
            <div className={s.conteiner}>
                <HashLink smooth to={'#top'} className={s.navLink}>Home</HashLink>
                <HashLink smooth to={'#about'} className={s.navLink}>About us</HashLink>
                <HashLink smooth to={'#services'} className={s.navLink}>Services</HashLink>
                <HashLink smooth to={'#projects'} className={s.navLink}>Project</HashLink>
                <HashLink smooth to={'#contact'} className={s.navLink}>Contact</HashLink>
            </div>
        </div>
    );
};

export default Navbar;