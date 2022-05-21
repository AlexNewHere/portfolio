import React from 'react';
import s from './App.module.css';
import Header from './Header/Header';
import Main from './Main/Main';
import About from './About/About';
import Services from './Services/Services';
import Projects from './Project/Projects';
import Contact from './Comtact/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className={s.App}>
        <Header/>
        <Main/>
        <section id={'about'}><About/></section>
        <section id={'services'}><Services/></section>
        <section id={'projects'}><Projects/></section>
        <section id={'contact'}><Contact/></section>

        <div className={s.rightEffect}/>
        <div className={s.leftEffect}/>
        <Footer/>
    </div>
  );
}

export default App;
