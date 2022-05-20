import React from 'react';
import s from './Contact.module.css';
import cont from '../Common/Style/Container.module.css';
import Form from './Form/Form';
import ContactItem from './ContactItem';

const Contact = () => {
    return (
        <div className={cont.conteiner + ' ' + s.contact}>
            <div className={s.mainText}>
                <h2>GET IN TOUCH</h2>
            </div>
            <div className={s.placeContact}>
                <Form/>
                <ContactItem/>
            </div>
        </div>
    );
};

export default Contact;