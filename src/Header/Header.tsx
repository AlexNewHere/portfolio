import React from 'react';
import s from './Header.module.css';
import Navbar from './Nav/Nav';

const Header = () => {
    return (
        <div className={s.header} id={'#top'}>
            <Navbar/>
        </div>
    );
};

export default Header;