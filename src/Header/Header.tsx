import React from 'react';
import s from '../Header/Header.module.scss';
import logo from '../logo/logo.svg';
import {Link, animateScroll as scroll} from 'react-scroll';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.link}>
                <div className={s.container}>
                    <div>
                        <img src={logo} className={s.logo} alt={'logo'}
                             onClick={() => scroll.scrollToTop(100)}/>
                    </div>
                    <div className={s.container_nav}>
                        <Link to={'top'}  smooth={true} duration={500}
                              className={s.navLink}><span>Main</span></Link>
                        <Link smooth to={'about'} offset={-65}
                              className={s.navLink}> Skills </Link>
                        <Link smooth to={'projects'} offset={-65}
                              className={s.navLink}>Project</Link>
                        <Link smooth to={'contact'} offset={-65}
                              className={s.navLink}>Contact</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;