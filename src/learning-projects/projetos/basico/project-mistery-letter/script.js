function checkOnlySpaces(array) {
  let spaceCounter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === '') {
      spaceCounter += 1;
    }
  }
  if (spaceCounter >= array.length) {
    return true;
  }
  return false;
}

function randomNumber(array) {
  let random = Math.floor(Math.random() * array.length);
  if (random === 3) {
    random = Math.floor(Math.random() * array.length);
  }
  return random;
}

function randomStyle(span) {
  const magazineOrNewspaper = ['magazine1', 'magazine2', 'newspaper'];
  const size = ['medium', 'big', 'reallybig'];
  const skew = ['skewleft', 'skewright'];
  const rotate = ['rotateleft', 'rotateright'];
  span.classList.add(magazineOrNewspaper[randomNumber(magazineOrNewspaper)]);
  span.classList.add(size[randomNumber(size)]);
  span.classList.add(skew[randomNumber(skew)]);
  span.classList.add(rotate[randomNumber(rotate)]);
  return span;
}

function generateSpan() {
  const letter = document.querySelector('#carta-gerada');
  const wordCounter = document.querySelector('#carta-contador');
  letter.innerHTML = '';
  const text = document.querySelector('#carta-texto').value;
  const strings = text.split(' ');
  if (text === '' || checkOnlySpaces(strings)) {
    letter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let index = 0; index < strings.length; index += 1) {
      let newLetter = document.createElement('span');
      newLetter = randomStyle(newLetter);
      newLetter.innerHTML = strings[index];
      newLetter.addEventListener('click', event => {
        event.target.classList = '';
        randomStyle(event.target);
      });
      letter.appendChild(newLetter);
    }
  }
  wordCounter.innerHTML = document.querySelectorAll('span').length;
}

function generateLetter() {
  const buttonCreateLetter = document.querySelector('#criar-carta');
  buttonCreateLetter.addEventListener('click', generateSpan);
}

window.onload = generateLetter();
