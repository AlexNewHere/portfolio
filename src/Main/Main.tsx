import React, {useState} from 'react';
import s from './Main.module.scss';
import cont from '../Common/Style/Container.module.scss';
import photo from '../logo/photo.jpg';
import Typist from 'react-typist';
import AlexBoiko from '../cv/AlexBoiko.pdf'

const Main = () => {
    const texts = ['a Front end Developer', 'a Software engineer'];
    const [currentTextCounter, setCurrentTextCounter] = useState(0);

    const changeText = () => {
        if (currentTextCounter < texts.length - 1) {
            setCurrentTextCounter(currentTextCounter + 1)
        } else {
            setCurrentTextCounter(0)
        }
    }

    return (
        <main className={cont.container+' '+s.main}>

                <div className={s.mainPhoto}><img src={photo} alt={'mainPhoto'}/></div>
                <div className={s.mainText}>
                    <h5>INTRODUCTION</h5>
                    <h1>I'm Alex Boiko <br/>
                        <Typist className={s.textTheme} key={currentTextCounter}
                                onTypingDone={changeText} startDelay={500}
                                avgTypingDelay={150}>
                            {texts[currentTextCounter]}
                            <Typist.Backspace count={texts[currentTextCounter].length}
                                              delay={500}/>
                        </Typist>

                    </h1>
                    <p>I develop services for customers of all sizes, specializing in
                        creating stylish, modern websites, web services and online stores.
                        My passion is to develops web application through the modern
                        technology and different libraries. Check out my Portfolio
                    </p>
                    <div className={s.btn}>
                        <a href={AlexBoiko} target="_blank" rel={'noreferrer'}
                           download={'AlexBoiko.pdf'}>
                            <button className={cont.btn}>Browse Resume</button>
                        </a>
                    </div>
                </div>

        </main>
    );
};

export default Main;