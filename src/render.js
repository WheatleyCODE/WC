import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export function rerenderEnTree (addPost, state, addNewTextPost) {
  ReactDOM.render(
  <React.StrictMode>
  <App addNewTextPost={addNewTextPost} addPost={addPost} state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
  );
}
