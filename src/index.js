import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './root-cmp.jsx';
import { HashRouter as Router } from 'react-router-dom'
import { store } from './store/store.js';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
