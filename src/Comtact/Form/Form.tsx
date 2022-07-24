import React, {FormEvent, useRef} from 'react';
import s from './Form.module.scss';
import cont from '../../Common/Style/Container.module.scss'
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef() as React.MutableRefObject<HTMLFormElement>;
    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        emailjs.sendForm('service_1nznlqn', 'template_8drtjj1', form.current, 'vi3UDX_HhfS5-xvU8')
            .then(() => {
                alert('Message successfully sent!')
                window.location.reload()
            })
            .catch(() => {
                alert('Failed to send the message, please try again')
            });
    };

    return (
        <div className={s.contactForm}>
            <h5>SAY SOMETHING</h5>
            <form ref={form} onSubmit={sendEmail} className={s.placeInput}>
                    <div className={s.rowInput}>
                        <input className={s.input} type="text" name={'name'} required
                               placeholder={'name'}/>
                        <input className={s.input} type="email" name={'email'} required
                               placeholder={'email'}/>
                    </div>
                    <input className={s.input} type="text" name={'subject'} required
                           placeholder={'subject'}/>
                    <textarea className={s.textArea} name={'messages'} required
                              placeholder={'messages'}/>
                    <button className={cont.btn} type={'submit'}>Send Messages</button>
            </form>
        </div>
    );
};

export default Form;