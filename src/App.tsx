import React from 'react';
import s from './App.module.css';
import Header from './Header/Header';
import Main from './Main/Main';
import About from './About/About';
import Services from './Services/Services';
import Projects from './Project/Projects';
import Contact from './Comtact/Contact';

function App() {
  return (
    <div className={s.App}>
        <Header/>
        <Main/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
