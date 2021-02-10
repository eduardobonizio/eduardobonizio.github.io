import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { HashRouter as Router } from 'react-router-dom';
import { Router, Route } from 'react-router-dom';

import App from './app/App';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        {/* <Router basename={process.env.PUBLIC_URL}>
      </Router> */}
        <Route path="/" component={App} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
