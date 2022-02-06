import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from '../../api/PrivateRoute';
import Home from '../Home/Home';
import Kakele from '../Kakele/Kakele.';
import OreCalculator from '../Kakele/OreCalculator';
import SetMaker from '../Kakele/SetMaker';
import GameSetup from '../Quiz/GameSetup';
import StartGame from '../Quiz/StartGame';
import Login from '../UserControll/Login';
import SignUp from '../UserControll/SignUp';

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/kakele" element={<Kakele />} />
      <Route path="/kakele/set-maker" element={<SetMaker />} />
      <Route path="/kakele/ore-calculator" element={<OreCalculator />} />

      <Route
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
      />
      <Route from="*" to="/" />
    </Routes>
  );
}