import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import store from './Redux/ReduxStore'
import App from './App'
import './styles/main.scss'

export default function renderEnTree() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App store={store} />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
  );
}

renderEnTree(store)
store.subscribe(() => {
  renderEnTree(store)
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
