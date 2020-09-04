import React from 'react';
import './App.css';
import Main from './Components/Main/Main.js'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Aside from './Components/Aside/Aside'




function App(props) {
  return (
    <div className="App">
      <Header />
      <Main addNewTextPost={props.addNewTextPost} 
            addPost={props.addPost}
            state={props.state} />
      <Aside />
      <Footer />
    </div>
  );
}





export default App;
