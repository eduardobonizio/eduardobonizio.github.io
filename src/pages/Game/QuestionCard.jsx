import React, { useState } from 'react';

function QuestionCard(prop) {
  const [selectedOption, setSelectedOption] = useState();
  const [answered, setAnswered] = useState(false);
  const {
    question: { question, theme, options, id },
    answer,
    newCard,
  } = prop;
  function mapOptions() {
    return options.map((e, i) => {
      const newKey = id + i;
      return (
        <button
          type="button"
          className="option"
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
      e.disabled = false;
    });
  }

  function handleClick() {
    if (!selectedOption) return;
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
      <div className="card-body">
        <h5 className="card-title mb-2">Tema: {theme}</h5>
        <p className="card-text">{question}</p>

        <form>
          <div className="mt-2 mb-1">{mapOptions()}</div>
        </form>
        <div className="d-flex justify-content-around flex-wrap">
          <button type="button" disabled>
            Curtir
          </button>
          {/* <Button disabled>Sugerir correção</Button> */}
          <button type="button" onClick={handleClick}>
            {answered ? 'Próxima pergunta' : 'Confirmar'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
