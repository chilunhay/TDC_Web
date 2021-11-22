import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
import {positions, transitions, Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';


ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate}>

    </AlertProvider>
    <App />
  </Provider>,
  document.getElementById('root')
);


