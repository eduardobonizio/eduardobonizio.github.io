import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import TrintaDiasDeCss from '../30diasDeCSS/TrintaDiasDeCss';
import Cronometers from '../Cronometers/Cronometers';
import GameSetup from '../Game/GameSetup';
import StartGame from '../Game/StartGame';
import GitHubPageTutoRial from '../GitHubPageTutoRial/GitHubPageTutoRial';
import Home from '../Home/Home';

export default function Content() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/github-pages-react" exact component={GitHubPageTutoRial} />
      <Route path="/game" exact component={GameSetup} />
      <Route path="/game/start" exact component={StartGame} />
      <Route path="/cronometers" exact component={Cronometers} />
      <Route path="/30-dias-css" exact component={TrintaDiasDeCss} />
      <Route path="/30-dias-css/:day" exact component={TrintaDiasDeCss} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
