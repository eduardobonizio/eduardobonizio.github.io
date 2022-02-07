import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as userSetup from '../../store/actions/gameConfig.actions';

export default function GameSetup() {
  const navigate = useNavigate();
  const gameConfig = useSelector(state => state.gameConfig);
  const dispatch = useDispatch();
  const [user, setUser] = useState(gameConfig && gameConfig.user);
  const [theme, setTheme] = useState('Enfermagem');

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
    navigate('/quiz/start');
  }
  return (
    <div className="container d-flex justify-content-center">
      <form className="d-flex flex-column">
        <div className="input-group mb-1">
          <span className="input-group-text" id="basic-addon1">
            Apelido
          </span>
          <input
            type="text"
            className="form-control"
            placeholder={
              gameConfig && gameConfig.user
                ? gameConfig.user
                : 'Seu nome ou apelido'
            }
            aria-label="Email"
            aria-describedby="basic-addon1"
            name="user"
            onChange={e => setUser(e.target.value)}
          />
        </div>
        <div className="input-group mb-1">
          <label htmlFor="temeSelection" className="input-group-text">
            Tema
          </label>
          <select
            className="form-select"
            id="temeSelection"
            onChange={e => {
              setTheme(e.target.value);
            }}
          >
            <option defaultValue>Enfermagem</option>
          </select>
        </div>

        <button type="button" className="btn btn-primary" onClick={updateUser}>
          Iniciar
        </button>
      </form>
    </div>
  );
}
