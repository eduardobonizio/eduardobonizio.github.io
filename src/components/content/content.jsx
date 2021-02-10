import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GameSetup from '../../app/Game/GameSetup';
import StartGame from '../../app/Game/StartGame';

import GitHubPageTutoRial from '../../app/GitHubPageTutoRial/GitHubPageTutoRial';
import Home from '../../app/Home/Home';
import Secure from '../../app/Secure/Secure';

export default function Content() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/github-pages-react" exact component={GitHubPageTutoRial} />
      <Route path="/game" exact component={GameSetup} />
      <Route path="/game/start" exact component={StartGame} />
      <Route path="/secure" exact component={Secure} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
