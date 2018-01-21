import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';

const preloadedState = {};
const store = configureStore(preloadedState)
ReactDOM.render(<Root store={ store }/>, document.getElementById('root'));
registerServiceWorker();
