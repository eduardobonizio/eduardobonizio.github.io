/* eslint-disable immutable/no-let */
/* eslint-disable more/no-window */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Fade } from 'reactstrap';

import * as api from '../../api/index';
import * as userSetup from '../../store/actions/gameConfig.actions';
import { getFirstMissingInSequence } from '../../utils/Index';
import QuestionCard from './QuestionCard';

export default function StartGame() {
  const gameConfig = useSelector(state => state.gameConfig);
  const themeSelected = verifyGameSetup();
  function verifyGameSetup() {
    if (!gameConfig) return false;
    return true;
  }

  const dispatch = useDispatch();
  const [card, setCard] = useState(null);
  const [score, setScore] = useState(0);
  const [answeredList, setAnsweredList] = useState(
    (gameConfig && gameConfig.answered) || [0],
  );
  const [finishGame, setFinishGame] = useState(false);
  const [fade, setFade] = useState(true);

  async function newCard() {
    setFade(false);
    setTimeout(() => {
      setFade(true);
    }, 300);
    const next = getFirstMissingInSequence(answeredList);

    const question = await api.getQuestionFromDatabase('questions', next);

    if (!question && !(gameConfig && gameConfig.answered.length < next)) {
      setFinishGame(true);
      return;
    }

    setCard(question);
    setAnsweredList([...answeredList, next]);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    if (themeSelected) {
      newCard();
    }
  }, []);

  function answer(selectedOption, id) {
    if (!selectedOption) return;
    const allOptions = document.querySelectorAll('.option');
    const rightAnswer = selectedOption.innerText === card.correctAnswer;
    if (rightAnswer) {
      setScore(score + 1);
      const answeredQuestions = gameConfig.answered
        ? [...gameConfig.answered, id].sort((a, b) => a - b)
        : [id];
      dispatch(userSetup.updateScore((gameConfig.score += 1)));
      dispatch(userSetup.updateAnswerdQuestions(answeredQuestions));
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
    dispatch(userSetup.updateLastAnswered(id));
  }

  useEffect(() => {
    localStorage.setItem('userConfig', JSON.stringify(gameConfig));
  }, [gameConfig]);

  return (
    <div className="container d-flex justify-content-center">
      {!themeSelected && <Redirect to="/game" />}
      {!finishGame && card && (
        <Fade timeout={(500, 100)} in={fade}>
          <QuestionCard question={card} answer={answer} newCard={newCard} />
        </Fade>
      )}
    </div>
  );
}
