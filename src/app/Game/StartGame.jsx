/* eslint-disable more/no-window */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Button } from 'reactstrap';

import { questions } from '../../api/api';
import * as userSetup from '../../store/actions/gameConfig.actions';
import QuestionCard from './QuestionCard';

export default function StartGame() {
  const dispatch = useDispatch();
  const gameConfig = useSelector(state => state.gameConfig);
  const [listaCards, setListaCards] = useState(questions);
  const [card, setCard] = useState();
  const [score, setScore] = useState(0);
  const themeSelected = verifyGameSetup();

  function verifyGameSetup() {
    if (!gameConfig) return false;
    return true;
  }
  function newCard() {
    const randomIndex = parseInt(
      Math.random(listaCards.length) * listaCards.length,
      10,
    );
    setCard(listaCards[randomIndex]);
    const newList = [...listaCards].filter(
      e => e.id !== listaCards[randomIndex].id,
    );
    setListaCards(newList);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  function answer(selectedOption) {
    if (!selectedOption) return;
    const allOptions = document.querySelectorAll('.option');
    const rightAnswer = selectedOption.innerText === card.correctAnswer;
    if (rightAnswer) {
      setScore(score + 1);
      dispatch(userSetup.updateScore((gameConfig.score += 1)));
      localStorage.setItem('userConfig', JSON.stringify(gameConfig));
    }
    if (!rightAnswer) {
      selectedOption.classList.add('btn-danger');
    }
    allOptions.forEach(e => {
      if (e.innerText === card.correctAnswer) {
        e.classList.add('btn-success');
      }
      e.disabled = true;
    });
  }

  return (
    <div className="container d-flex justify-content-center">
      {!themeSelected && <Redirect to="/game" />}
      {card ? (
        <QuestionCard question={card} answer={answer} newCard={newCard} />
      ) : (
        newCard()
      )}
    </div>
  );
}
