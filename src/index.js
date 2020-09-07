
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './Redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export function renderEnTree (store) {
  ReactDOM.render(
  <React.StrictMode>
  <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
  );
}





renderEnTree(store)
store.subscribe(renderEnTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
