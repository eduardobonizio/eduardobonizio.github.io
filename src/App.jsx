/* eslint-disable no-unused-vars */
import React from 'react';
import ReactGA from 'react-ga';

import Footer from './pages/Footer/Footer';
import NavBar from './pages/NavBar/NavBar';
import Routes from './pages/Routes/Routes';
import { loadUserConfig } from './utils/Index';
import './App.css';

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);

export default function App() {
  loadUserConfig();
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <>
      <NavBar />
      <div className="body-container">
        <Routes />
      </div>
      <Footer />
    </>
  );
}
