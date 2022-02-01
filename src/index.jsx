import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './api/Auth';
import App from './App';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <App />
        </Router>
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app'),
);
