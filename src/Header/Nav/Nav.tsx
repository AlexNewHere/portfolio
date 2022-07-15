import React from 'react';
import s from './Nav.module.css';
import logo from '../../logo/logo.svg';
import {Link, animateScroll as scroll} from 'react-scroll';

const Navbar = () => {
    return (
        <div className={s.link}>

            <div className={s.conteiner}>
                <div>
                    <img src={logo} className={s.logo} alt={'logo'} onClick={() => scroll.scrollToTop(100)}/>
                </div>
                <div className={s.conteiner_nav}>
                    <Link to={'top'} smooth={true} duration={500}  className={s.navLink}>Home</Link>
                    <Link smooth to={'about'} className={s.navLink}>About
                        us</Link>
                    <Link smooth to={'services'}
                          className={s.navLink}>Services</Link>
                    <Link smooth to={'projects'}
                          className={s.navLink}>Project</Link>
                    <Link smooth to={'contact'}
                          className={s.navLink}>Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;