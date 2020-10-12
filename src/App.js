import React from 'react';
import './App.css';
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AsideBlock from './Components/AsideBlock/AsideBlock'

function App(props) {
  return (
    <div className="App">
      <Header />
      <Main store = {props.store} />
      {/* <AsideBlock /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
