import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import * as userSetup from '../../store/actions/gameConfig.actions';

export default function GameSetup() {
  const gameConfig = useSelector(state => state.gameConfig);
  const dispatch = useDispatch();
  const [theme, setTheme] = useState();

  function updateUser() {
    const hasScore = gameConfig && gameConfig.score ? gameConfig.score : 0;
    const hasAnswered =
      gameConfig && gameConfig.answered ? gameConfig.answered : [];
    const userOptions = {
      score: hasScore,
      theme,
      answered: hasAnswered,
      lastAnswered: (gameConfig && gameConfig.lastAnswered) || 1,
    };
    if (!theme) return;
    localStorage.setItem('userConfig', JSON.stringify(userOptions));
    dispatch(userSetup.newUser(userOptions));
  }
  return (
    <>
      <main className="container d-flex justify-content-center">
        <Form>
          <FormGroup>
            <Label for="temeSelection">Tema</Label>
            <Input
              type="select"
              name="theme"
              id="temeSelection"
              onChange={e => setTheme(e.target.value)}
            >
              <option />
              <option>Enfermagem</option>
            </Input>
          </FormGroup>
          {theme ? (
            <Button
              type="button"
              onClick={updateUser}
              tag={RRNavLink}
              to="/game/start"
            >
              Iniciar
            </Button>
          ) : (
            <Button type="button">Iniciar</Button>
          )}
        </Form>
      </main>
    </>
  );
}
