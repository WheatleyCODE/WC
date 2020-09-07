
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './Redux/ReduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

export function renderEnTree (store) {
  ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
          <App store={store} />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}





renderEnTree(store)
store.subscribe( () => {
  renderEnTree(store)
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
