import React from 'react';
import s from './App.module.scss';
import Header from './Header/Header';
import Main from './Main/Main';
import Skills from './Skills/Skills';
import Projects from './Project/Projects';
import Contact from './Comtact/Contact';
import Footer from './Footer/Footer';
import {Element} from 'react-scroll';

function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Element name={'top'}><Main/></Element>
            <Element name={'about'}><Skills/></Element>
            <Element name={'projects'}><Projects/></Element>
            {/*<Element name={'contact'}><Contact/></Element>*/}
            <div className={s.rightEffect}/>
            <div className={s.leftEffect}/>
            {/*<Footer/>*/}
        </div>
);
}

export default App;
