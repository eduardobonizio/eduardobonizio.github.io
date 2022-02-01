import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from '../../api/PrivateRoute';
import TrintaDiasDeCss from '../30diasDeCSS/TrintaDiasDeCss';
import GameSetup from '../Game/GameSetup';
import StartGame from '../Game/StartGame';
import Home from '../Home/Home';
import Login from '../UserControll/Login';
import SignUp from '../UserControll/SignUp';

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route
        path="/game"
        element={
          <PrivateRoute>
            <GameSetup />
          </PrivateRoute>
        }
      />

      <Route
        path="/game/start"
        element={
          <PrivateRoute>
            <StartGame />
          </PrivateRoute>
        }
      />

      <Route path="/30-dias-css" element={<TrintaDiasDeCss />} />
      <Route path="/30-dias-css/:day" element={<TrintaDiasDeCss />} />
      <Route from="*" to="/" />
    </Routes>
  );
}
