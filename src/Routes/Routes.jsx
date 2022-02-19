import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import KakeleRedirect from '../pages/Kakele/KakeleRedirect';
// import NotFound from '../pages/NotFound/NotFound';
// import PrivateRoute from '../api/PrivateRoute';
// import GameSetup from '../pages/Quiz/GameSetup';
// import StartGame from '../pages/Quiz/StartGame';
// import Login from '../pages/UserControll/Login';
// import SignUp from '../pages/UserControll/SignUp';

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="kakele/*" element={<KakeleRedirect />} />
      <Route path="kakele-db/*" element={<KakeleRedirect />} />

      {/* <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} /> */}
      {/* <Route
        path="/quiz"
        element={
          <PrivateRoute>
            <GameSetup />
          </PrivateRoute>
        }
      />

      <Route
        path="/quiz/start"
        element={
          <PrivateRoute>
            <StartGame />
          </PrivateRoute>
        }
      /> */}
    </Routes>
  );
}
