/* eslint-disable more/no-window */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-unescaped-entities */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Redirect,
  NavLink as RRNavLink,
  useHistory,
  Link,
} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Fade } from 'reactstrap';

import * as userSetup from '../../store/actions/gameConfig.actions';

export default function GameSetup() {
  const gameConfig = useSelector(state => state.gameConfig);
  const dispatch = useDispatch();
  const [user, setUser] = useState(gameConfig && gameConfig.user);
  const [theme, setTheme] = useState();

  function updateUser() {
    const hasScore = gameConfig && gameConfig.score ? gameConfig.score : 0;
    const hasAnswered =
      gameConfig && gameConfig.answered ? gameConfig.answered : [];
    const userOptions = {
      user,
      score: hasScore,
      theme,
      answered: hasAnswered,
      lastAnswered: (gameConfig && gameConfig.lastAnswered) || 1,
    };
    if (!user || !theme) return;
    localStorage.setItem('userConfig', JSON.stringify(userOptions));
    dispatch(userSetup.newUser(userOptions));
  }
  return (
    <>
      <div className="container d-flex justify-content-center">
        <Form>
          <FormGroup>
            <Label for="user">Nome</Label>
            <Input
              type="text"
              name="user"
              id="user"
              placeholder={
                gameConfig && gameConfig.user
                  ? gameConfig.user
                  : 'Seu nome ou nickname'
              }
              onChange={e => setUser(e.target.value)}
            />
          </FormGroup>
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
          {user && theme ? (
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
      </div>
    </>
  );
}
