import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Routes, Route, useLocation } from 'react-router-dom';

import PrivateRoute from '../../api/PrivateRoute';
import Home from '../Home/Home';
import Kakele from '../Kakele/Kakele.jsx';
import OreCalculator from '../Kakele/OreCalculator';
import SearchItem from '../Kakele/SearchItem';
import SetMaker from '../Kakele/SetMaker';
import ShowItem from '../Kakele/ShowItem';
import ShowSet from '../Kakele/ShowSet';
import WikiDataBaseToJson from '../Kakele/WikiDataBaseToJson';
import GameSetup from '../Quiz/GameSetup';
import StartGame from '../Quiz/StartGame';
import Login from '../UserControll/Login';
import SignUp from '../UserControll/SignUp';

function usePageViews() {
  // eslint-disable-next-line immutable/no-let
  const location = useLocation();

  useEffect(() => {
    if (window.GA_INITIALIZED) {
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);
      // eslint-disable-next-line immutable/no-mutation
      window.GA_INITIALIZED = true;
    }
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location]);
}

export default function Rotas() {
  usePageViews();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/kakele" element={<Kakele />}>
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
      <Route from="*" to="/" />
    </Routes>
  );
}
