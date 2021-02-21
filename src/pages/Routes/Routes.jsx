import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from '../../api/PrivateRoute';
import TrintaDiasDeCss from '../30diasDeCSS/TrintaDiasDeCss';
import Cronometers from '../Cronometers/Cronometers';
import GameSetup from '../Game/GameSetup';
import StartGame from '../Game/StartGame';
import GitHubPageTutoRial from '../GitHubPageTutoRial/GitHubPageTutoRial';
import Home from '../Home/Home';
import Login from '../UserControll/Login';
import SignUp from '../UserControll/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/github-pages-react" exact component={GitHubPageTutoRial} />
      <PrivateRoute path="/game" exact component={GameSetup} />
      <PrivateRoute path="/game/start" exact component={StartGame} />
      <Route path="/cronometers" exact component={Cronometers} />
      <Route path="/30-dias-css" exact component={TrintaDiasDeCss} />
      <Route path="/30-dias-css/:day" exact component={TrintaDiasDeCss} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
