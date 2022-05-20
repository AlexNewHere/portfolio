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
                    <div>
                        <input className={s.input} type="text" placeholder={'Name'}/>
                    </div>
                    <div>
                        <textarea className={s.textArea} placeholder={'Your messages'}/>
                    </div>
                    <div>
                        <button className={s.btn}>Send Messages</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;