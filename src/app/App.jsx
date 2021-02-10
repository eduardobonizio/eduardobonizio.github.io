import React from 'react';

import Content from '../components/content/content';
import Footer from '../components/footer/footer';
import NavBar from '../components/navBar/navBar';
import loadUserConfig from '../libs/loadUserConfig';
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
