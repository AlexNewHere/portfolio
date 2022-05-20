import React from 'react';
import s from './Form.module.css';

const Form = () => {
    return (
        <div className={s.contactForm}>
            <form action={''}>
                <h5>SAY SOMETHING</h5>
                <div className={s.placeInput}>
                    <div className={s.rowInput}>
                        <input className={s.input} type="text" placeholder={'Name'}/>
                        <input className={s.input} type="text" placeholder={'Email'}/>
                    </div>

                        <input className={s.input} type="text" placeholder={'Subject*'}/>
                        <textarea className={s.textArea} placeholder={'Your messages'}/>
                        <button className={s.btn}>Send Messages</button>

                </div>
            </form>
        </div>
    );
};

export default Form;