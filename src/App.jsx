/* eslint-disable no-unused-vars */
import React from 'react';

import Content from './pages/Content/Content';
import Footer from './pages/Footer/Footer';
import NavBar from './pages/NavBar/NavBar';
import { loadUserConfig } from './utils/Index';
import './App.css';

export default function App() {
  loadUserConfig();
  return (
    <>
      <NavBar />
      <Content />
      <Footer />
    </>
  );
}
