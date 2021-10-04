import React from 'react';
import ReactDOM from 'react-dom';
import App, { counterReducer } from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(counterReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
