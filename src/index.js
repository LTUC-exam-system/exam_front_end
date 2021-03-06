import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './context/signinContext';

import { Provider } from 'react-redux';
import store from './rtk/index';

ReactDOM.render(
  <>
   <Provider store={store}>
      <AuthProvider>
    <App />
    </AuthProvider>
    </Provider>
  </>,
  document.getElementById('root')
);
reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

