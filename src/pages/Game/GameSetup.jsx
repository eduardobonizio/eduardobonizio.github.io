/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';

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
    <div className="container d-flex justify-content-center">
      <form>
        <label htmlFor="user">
          Nome
          <input
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
        </label>
        <label htmlFor="temeSelection">
          Tema
          <select
            type="select"
            name="theme"
            id="temeSelection"
            onChange={e => setTheme(e.target.value)}
          >
            <option />
            <option>Enfermagem</option>
          </select>
        </label>
        {user && theme ? (
          <button
            type="button"
            onClick={updateUser}
            tag={RRNavLink}
            to="/game/start"
          >
            Iniciar
          </button>
        ) : (
          <button type="button">Iniciar</button>
        )}
      </form>
    </div>
  );
}
