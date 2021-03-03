import React from 'react';
import { useSelector } from 'react-redux';

// import Footer from './pages/Footer/Footer';
import NavBar from './pages/NavBar/NavBar';
import Routes from './pages/Routes/Routes';
import { loadUserConfig } from './utils/Index';

import './App.css';

export default function App() {
  const currentUser = useSelector(state => state.currentUser);
  loadUserConfig();

  if (currentUser === false) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <NavBar />
      <main className="container">
        <Routes />
      </main>
      {/* <Footer /> */}
    </>
  );
}
