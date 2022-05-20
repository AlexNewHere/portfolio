import React from 'react';
import s from './App.module.css';
import Header from './Header/Header';
import Main from './Main/Main';
import About from './About/About';
import Services from './Services/Services';

function App() {
  return (
    <div className={s.App}>
        <Header/>
        <Main/>
        <About/>
        <Services/>
    </div>
  );
}

export default App;
