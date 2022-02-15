/* eslint-disable immutable/no-mutation */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as api from '../../api/index';
import * as userSetup from '../../store/actions/gameConfig.actions';
import { getFirstMissingInSequence } from '../../utils/Index';
import QuestionCard from './QuestionCard';

export default function StartGame() {
  const dispatch = useDispatch();
  const gameConfig = useSelector(state => state.gameConfig);
  const [card, setCard] = useState(null);
  const [score, setScore] = useState(0);
  const [answeredList, setAnsweredList] = useState(
    (gameConfig && gameConfig.answered) || [0],
  );
  const [finishGame, setFinishGame] = useState(false);

  async function getCard(array) {
    const next = getFirstMissingInSequence(array);
    const question = await api.getQuestionFromDatabase('questions', next);
    return question;
  }

  async function newCard() {
    const question = await getCard(answeredList);
    if (!question) {
      const answeredArray = gameConfig.answered;
      const missingQuestion = await getCard(answeredArray);
      if (missingQuestion !== card) {
        setAnsweredList(answeredArray);
        setCard(missingQuestion);
        return;
      }
      setFinishGame(true);
      return;
    }

    setCard(question);
    setAnsweredList([...answeredList, question.id]);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  function answer(selectedOption, id) {
    if (!selectedOption) return;
    const allOptions = document.querySelectorAll('.option');
    const rightAnswer = selectedOption.innerText === card.correctAnswer;
    if (rightAnswer) {
      setScore(score + 1);
      const answeredQuestions = gameConfig.answered
        ? [...gameConfig.answered, id].sort((a, b) => a - b)
        : [id];
      dispatch(userSetup.updateScore(gameConfig.score + 1));
      dispatch(userSetup.updateAnswerdQuestions(answeredQuestions));
    }
    if (!rightAnswer) {
      selectedOption.classList.remove('btn-light');
      selectedOption.classList.add('btn-danger');
    }
    allOptions.forEach(e => {
      if (e.innerText === card.correctAnswer) {
        e.classList.remove('btn-light');
        e.classList.add('btn-success');
      }
      e.disabled = true;
    });
    dispatch(userSetup.updateLastAnswered(id));
  }

  useEffect(() => newCard(), []);

  useEffect(() => {
    localStorage.setItem('userConfig', JSON.stringify(gameConfig));
  }, [gameConfig]);

  return (
    <div className="container d-flex justify-content-center">
      {!finishGame && card && (
        <QuestionCard question={card} answer={answer} newCard={newCard} />
      )}
    </div>
  );
}
