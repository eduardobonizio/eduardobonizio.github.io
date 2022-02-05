import React, { useState } from 'react';

function QuestionCard(prop) {
  const [selectedOption, setSelectedOption] = useState();
  const [answered, setAnswered] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const {
    question: { question, theme, options, id },
    answer,
    newCard,
  } = prop;
  function generateOptions() {
    return options.map((e, i) => {
      const newKey = id + i;
      return (
        <button
          type="button"
          className="option btn btn-light mb-3"
          style={{ whiteSpace: 'pre-line' }}
          color="secondary"
          size="lg"
          key={newKey}
          block
          onClick={event => setSelectedOption(event.target)}
        >
          {e}
        </button>
      );
    });
  }

  function nextAnswer() {
    const allOptions = document.querySelectorAll('.option');
    if (!allOptions) return;
    allOptions.forEach(e => {
      e.classList.remove('btn-danger');
      e.classList.remove('btn-success');
      e.classList.add('btn-light');
      e.disabled = false;
    });
  }

  function answerQuestion() {
    if (!selectedOption) {
      const FIVE_SECONDS = 5000;
      if (!showAlert) {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, FIVE_SECONDS);
      }
      return;
    }
    if (!answered) {
      answer(selectedOption, id);
    }
    if (answered) {
      newCard();
      setSelectedOption();
      nextAnswer();
    }
    setAnswered(!answered);
  }

  return (
    <div className="card">
      {showAlert && (
        <div
          className="alert alert-warning position-absolute start-50 translate-middle alert-fixed"
          role="alert"
        >
          Escolha uma opção
        </div>
      )}
      <div className="card-body">
        <h5 className="card-title mb-2">Tema: {theme}</h5>
        <p className="card-text">{question}</p>

        <form className="d-flex flex-column">{generateOptions()}</form>
        <div className="d-flex justify-content-around flex-wrap">
          <button type="button" className="btn btn-success" disabled>
            Curtir
          </button>
          {/* <Button disabled>Sugerir correção</Button> */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={answerQuestion}
          >
            {answered ? 'Próxima pergunta' : 'Confirmar'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
