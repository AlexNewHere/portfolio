import React from 'react';
import s from '../Comtact/Contact.module.scss';
import cont from '../Common/Style/Container.module.scss';
import Form from './Form/Form';
import ContactItem from './ContactItem';
import Title from '../Common/Title/Title';


const Contact = () => {
    return (
        <div className={cont.container + ' ' + s.contact}>
            <Title title={'GET IN TOUCH'} />
            <div className={s.placeContact}>
                <Form/>
                <ContactItem/>
            </div>
        </div>
    );
};

export default Contact;