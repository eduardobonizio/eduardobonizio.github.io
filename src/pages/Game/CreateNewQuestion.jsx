/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { geTotalQuestions, setItemOnDatabase } from '../../api/index';

export default function CreateNewQuestion() {
  const currentUser = useSelector(state => state.currentUser);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [theme, setTheme] = useState('');
  const [type, setType] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');

  function removeBlank(array) {
    return array.filter(e => e !== '');
  }

  async function handleClick(e) {
    e.preventDefault();
    const checkOptions = removeBlank(options);
    if (checkOptions.length < 4) return;
    const id = await geTotalQuestions();
    const newQuestion = {
      id,
      question,
      options,
      theme,
      type,
      correctAnswer,
    };
    setItemOnDatabase('questions', newQuestion);
  }

  function handleInputChange(e, pos) {
    const newOptions = [...options];
    newOptions[pos] = e.target.value;
    setOptions(newOptions);
  }

  return (
    <main className="container d-flex flex-column justify-content-center align-items-center">
      <form className="d-flex flex-column">
        <label htmlFor="questionType">
          <select
            name="questionType"
            id="questionType"
            required
            onChange={e => setType(e.target.value)}
          >
            <option selected disabled>
              -- Chose one options --
            </option>
            <option value="multiple choice">Multiple Choice</option>
            <option value="trueOrFalse">True/False</option>
          </select>
        </label>
        <input onChange={e => setTheme(e.target.value)} placeholder="Theme" />
        <input
          onChange={e => setQuestion(e.target.value)}
          placeholder="Question"
        />
        <input
          onChange={e => handleInputChange(e, 0)}
          placeholder="First option"
        />
        <input
          onChange={e => handleInputChange(e, 1)}
          placeholder="Second Option"
        />
        <input
          onChange={e => handleInputChange(e, 2)}
          placeholder="Third Option"
        />
        <input
          onChange={e => handleInputChange(e, 3)}
          placeholder="Fourth Option"
        />
        <input
          onChange={e => setCorrectAnswer(e.target.value)}
          placeholder="Correct Answer"
        />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
      <p>UID: {currentUser.uid}</p>
      <p>displayName: {currentUser.displayName}</p>
      <p>email: {currentUser.email}</p>
      <p>emailVerified: {currentUser.emailVerified}</p>
    </main>
  );
}
