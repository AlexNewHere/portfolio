import React from 'react';
import s from './Footer.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className={s.footerContainer}>
            <div className={s.footer}>
                <div className={s.footerIcon}>
                    <a href={'https://github.com/AlexNewHere'} target={'_blank'} rel={'noreferrer'}>
                        <FontAwesomeIcon icon={faGithub} size={'2x'} color={'white'}/>
                    </a>
                    <a href={'https://www.linkedin.com/in/alexboiko/'} target={'_blank'} rel={'noreferrer'}>
                        <FontAwesomeIcon icon={faLinkedin} size={'2x'} color={'white'}/>
                    </a>
                    <a href={'https://t.me/Tqpui'} target={'_blank'} rel={'noreferrer'}>
                        <FontAwesomeIcon icon={faTelegram} size={'2x'} color={'white'}/>
                    </a>
                </div>
                <div className={s.footerText}><p>© 2022 All rights reserved</p></div>
            </div>
        </footer>
    );
};

export default Footer;