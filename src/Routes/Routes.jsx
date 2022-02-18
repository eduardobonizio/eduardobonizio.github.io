import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from '../api/PrivateRoute';
import Home from '../pages/Home/Home';
import Kakele from '../pages/Kakele/Kakele';
import OreCalculator from '../pages/Kakele/OreCalculator';
import SearchItem from '../pages/Kakele/SearchItem';
import SetMaker from '../pages/Kakele/SetMaker';
import ShowItem from '../pages/Kakele/ShowItem';
import ShowSet from '../pages/Kakele/ShowSet';
import WikiDataBaseToJson from '../pages/Kakele/WikiDataBaseToJson';
import NotFound from '../pages/NotFound/NotFound';
import GameSetup from '../pages/Quiz/GameSetup';
import StartGame from '../pages/Quiz/StartGame';
import Login from '../pages/UserControll/Login';
import SignUp from '../pages/UserControll/SignUp';

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="kakele" element={<Kakele />}>
        <Route path="set-maker" element={<SetMaker />} />
        <Route path="search-item" element={<SearchItem />} />
        <Route path="ore-calculator" element={<OreCalculator />} />
        <Route path="set/*" element={<ShowSet />} />
        <Route path="item/:name" element={<ShowItem />} />
      </Route>

      <Route path="/WikiDataBaseToJson" element={<WikiDataBaseToJson />} />

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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
