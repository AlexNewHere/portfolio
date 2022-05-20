import React from 'react';
import s from './Footer.module.css'
import twitter from '../logo/footer/twitter.svg';
import linkedIn from '../logo/footer/linkedIn.svg';

const Footer = () => {
    return (
        <div className={s.footerConteiner}>

            <div className={s.footer}>
                <div className={s.footerIcon}>
                    <img src={twitter} className={s.logo} alt={'twitter'}/>
                    <img src={linkedIn} className={s.logo} alt={'linkedIn'}/>

                </div>
                <div className={s.footerText}><p>© 2022 copyright all right reserved</p></div>
            </div>
        </div>
    );
};

export default Footer;