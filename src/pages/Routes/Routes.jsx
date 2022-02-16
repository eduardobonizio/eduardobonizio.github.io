import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from '../../api/PrivateRoute';
import Home from '../Home/Home';
import Kakele from '../Kakele/Kakele.jsx';
import Language from '../Kakele/Laguange';
import OreCalculator from '../Kakele/OreCalculator';
import SearchItem from '../Kakele/SearchItem';
import SetMaker from '../Kakele/SetMaker';
import ShowItem from '../Kakele/ShowItem';
import ShowSet from '../Kakele/ShowSet';
import WikiDataBaseToJson from '../Kakele/WikiDataBaseToJson';
import NotFound from '../NotFound/NotFound';
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
      <Route path="/:selectedlanguage" element={<Language />}>
        <Route path="kakele" element={<Kakele />}>
          <Route path="set-maker" element={<SetMaker />} />
          <Route path="search-item" element={<SearchItem />} />
          <Route path="ore-calculator" element={<OreCalculator />} />
          <Route path="set/*" element={<ShowSet />} />
          <Route path="item/:name" element={<ShowItem />} />
        </Route>
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
