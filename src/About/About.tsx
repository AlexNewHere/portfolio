import React from 'react';
import s from './About.module.css';
import cont from '../Common/Style/Container.module.css';
import photo_2 from '../logo/photo_2.webp';

const About = () => {
    return (

            <div className={cont.conteiner+' '+s.about}>
                <div className={s.mainText}>
                    <div>
                        <h3>Biography</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam amet quam quis et.
                            Non amet vitae arcu fames posuere.</p>
                    </div>
                    <div>
                        <h3>Education</h3>
                        <div>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                        </div>
                    </div>
                    <div>
                        <h3>Experience</h3>
                        <div>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Competences</h3>
                            <div>1</div>
                        </div>
                        <div>
                            <h3>Tools</h3>
                            <div>1</div>
                        </div>
                    </div>
                </div>
                <div className={s.mainPhoto}><img src={photo_2} className={s.photo} alt={'photo'}/></div>
            </div>

    );
};

export default About;