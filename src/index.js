
import './index.css';
import * as serviceWorker from './serviceWorker';
import { rerenderEnTree } from './render';
import state, { addPost, addNewTextPost } from './Data/state';



rerenderEnTree(addPost, state, addNewTextPost)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
