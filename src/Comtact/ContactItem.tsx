import React from 'react';
import s from '../Comtact/Contact.module.scss';
import phone_icon from '../logo/phone_icon.svg';
import mail_icon from '../logo/mail_icon.svg';
import place_icon from '../logo/place_icon.svg';

const ContactItem = () => {
    return (
        <div className={s.blockItem}>
            <div className={s.item}>
                <img src={place_icon} className={s.phoneIcon} alt={'place_icon'}/>
                <div>
                    <p>Belarus</p>
                    <p>Minsk City</p>
                </div>
            </div>
            <div className={s.item}>
                <img src={mail_icon} className={s.phoneIcon} alt={'mail_icon'}/>
                <div>
                    <p>tendren3310@googlemail.com</p>
                    <p>Mon to Fri (09 am – 7 pm)</p>
                </div>
            </div>
            <div className={s.item}>
                <img src={phone_icon} className={s.phoneIcon} alt={'phone_icon'}/>

                <div> <p> Phone: +375 29 658 13 85 </p>
                    </div>
            </div>
        </div>
    );
};

export default ContactItem;