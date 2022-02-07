/* eslint-disable no-unused-vars */
import React from 'react';

import Footer from './pages/Footer/Footer';
import NavBar from './pages/NavBar/NavBar';
import Routes from './pages/Routes/Routes';
import { loadUserConfig } from './utils/Index';
import './App.css';

export default function App() {
  loadUserConfig();
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
