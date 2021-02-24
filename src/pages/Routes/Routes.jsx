import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import TrintaDiasDeCss from '../30diasDeCSS/TrintaDiasDeCss';
import Cronometers from '../Cronometers/Cronometers';
import CreateNewQuestion from '../Game/CreateNewQuestion';
import GameSetup from '../Game/GameSetup';
import StartGame from '../Game/StartGame';
import GitHubPageTutoRial from '../GitHubPageTutoRial/GitHubPageTutoRial';
import Home from '../Home/Home';
import Projetos from '../Projetos/Projetos';
import Login from '../UserControll/Login';
import PrivateRoute from './PrivateRoute';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/projetos" exact component={Projetos} />
      <Route path="/signup" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/github-pages-react" exact component={GitHubPageTutoRial} />
      <PrivateRoute path="/game" exact component={GameSetup} />
      <PrivateRoute path="/game/start" exact component={StartGame} />
      <PrivateRoute
        path="/game/new-question"
        exact
        component={CreateNewQuestion}
      />
      <Route path="/cronometers" exact component={Cronometers} />
      <Route path="/30-dias-css" exact component={TrintaDiasDeCss} />
      <Route path="/30-dias-css/:day" exact component={TrintaDiasDeCss} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
