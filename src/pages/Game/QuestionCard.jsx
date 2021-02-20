/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import {
  Card,
  // CardImg,
  CardText,
  CardBody,
  CardTitle,
  // CardSubtitle,
  Button,
  ListGroup,
  // ListGroupItem,
  FormGroup,
  // Label,
  // CustomInput,
} from 'reactstrap';

const QuestionCard = prop => {
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
        <Button
          className="option"
          style={{ whiteSpace: 'pre-line' }}
          color="secondary"
          size="lg"
          key={newKey}
          block
          onClick={event => setSelectedOption(event.target)}
        >
          {e}
        </Button>
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
    <Card>
      <CardBody>
        <CardTitle tag="h5" className="mb-2">
          Tema: {theme}
        </CardTitle>
        <CardText>{question}</CardText>

        <FormGroup>
          <ListGroup className="mt-2 mb-1">{mapOptions()}</ListGroup>
        </FormGroup>
        <div className="d-flex justify-content-around flex-wrap">
          <Button disabled>Curtir</Button>
          {/* <Button disabled>Sugerir correção</Button> */}
          <Button onClick={handleClick}>
            {answered ? 'Próxima pergunta' : 'Confirmar'}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default QuestionCard;
