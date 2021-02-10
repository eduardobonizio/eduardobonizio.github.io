const rgbText = document.querySelector('#rgb-color');
const balls = document.querySelectorAll('.ball');
const answerText = document.querySelector('#answer');

function removeRgbText(element) {
  return element.style.backgroundColor.replace('rgb', '');
}

function guessColorText() {
  const randomBall = balls[Math.round(Math.random() * 5)];
  rgbText.innerHTML = removeRgbText(randomBall);
}

function randomNumberForRgb() {
  return Math.round(Math.random() * 255);
}

function generateRandomRgb() {
  const r = randomNumberForRgb();
  const g = randomNumberForRgb();
  const b = randomNumberForRgb();
  return `(${r}, ${g}, ${b})`;
}

function ballSetup() {
  for (let index = 0; index < balls.length; index += 1) {
    const newRgb = `rgb${generateRandomRgb()}`;
    balls[index].style.backgroundColor = newRgb;
  }
}

function setAnswerText(ballColor) {
  const rightColor = rgbText.innerHTML;
  const userAnswer = removeRgbText(ballColor);
  if (rightColor === userAnswer) {
    const score = document.querySelector('#score');
    score.innerHTML = parseInt(score.innerHTML, 10) + 3;
    answerText.innerHTML = 'Acertou!';
    ballSetup();
    guessColorText();
  } else {
    answerText.innerHTML = 'Errou! Tente novamente!';
  }
}

function ballsListener() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].addEventListener('click', event => {
      setAnswerText(event.target);
    });
  }
}

function restartButtonListener() {
  const restartButton = document.querySelector('#reset-game');
  restartButton.addEventListener('click', () => {
    answerText.innerHTML = 'Escolha uma cor';
    ballSetup();
    guessColorText();
  });
}

ballSetup();
guessColorText();
restartButtonListener();
ballsListener();
