const centerContent = document.querySelector('.center-content');

function createElements() {
  const h1 = document.createElement('h1');
  h1.id = 'title';
  h1.innerHTML = 'Paleta de Cores';
  centerContent.appendChild(h1);
}

createElements();

function createColorPallet() {
  const colors = ['black', 'red', 'blue', 'green'];

  // Cria a paleta de cores
  const colorPallet = document.createElement('div');
  colorPallet.id = 'color-palette';
  colorPallet.style.display = 'block';
  centerContent.appendChild(colorPallet);

  // Cria cada elemento da paleta de cores
  for (let i = 0; i < colors.length; i += 1) {
    const block = document.createElement('div');
    block.className = 'color';
    block.style.height = '30px';
    block.style.width = '30px';
    block.style.display = 'inline-block';
    block.style.border = '1px solid black';
    block.style.backgroundColor = generateRGB();

    // Adciona a classe selected a cor preta assim que a página é carregada
    if (colors[i] == 'black') {
      block.className = 'color selected';
      block.style.backgroundColor = 'black';
    }

    // Adiciona eventListener a cada bloco para que ele receba ou perca a className selected quando uma cor for selecionada
    block.addEventListener('click', selectColor);

    colorPallet.appendChild(block);
  }
}

createColorPallet();

let quantPixels = 5;

function criaQuadro() {
  const pixelSize = 40;

  const quadro = document.createElement('div');
  quadro.id = 'pixel-board';
  const quadroWidth = quantPixels * pixelSize + 'px';
  quadro.style.maxWidth = quadroWidth;
  quadro.style.display = 'block';
  centerContent.appendChild(quadro);

  const getPixelBoard = document.querySelector('#pixel-board');

  for (let i = 0; i < quantPixels * quantPixels; i += 1) {
    const div = document.createElement('div');
    div.style.display = 'inline-block';
    div.className = 'pixel';
    div.style.backgroundColor = 'white';
    div.style.width = `${pixelSize}px`;
    div.style.height = `${pixelSize}px`;
    div.style.border = '1px solid black';

    div.addEventListener('click', event => {
      const getBgColor = document.querySelector('.selected').style
        .backgroundColor;
      event.target.style.backgroundColor = getBgColor;
    });

    getPixelBoard.appendChild(div);
  }
}
createInput();
createButtonClear();
criaQuadro();

function selectColor(event) {
  const colorPixels = document.querySelectorAll('.color');
  for (let i = 0; i < colorPixels.length; i += 1) {
    colorPixels[i].className = 'color';
  }
  event.target.className = 'color selected';
}

function createButtonClear() {
  const button = document.createElement('button');
  const getPallet = document.querySelector('#color-palette');
  button.id = 'clear-board';
  button.innerHTML = 'Limpar';
  button.style.display = 'block';
  button.style.marginBottom = '4px';

  button.addEventListener('click', event => {
    const getAllPixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < getAllPixels.length; i += 1) {
      getAllPixels[i].style.backgroundColor = 'white';
    }
  });

  centerContent.appendChild(button);
}

// <input type="number" id="quantity" name="quantity" min="1" max="5"></input>

function createInput() {
  const section = document.createElement('section');
  const input = document.createElement('input');
  input.id = 'board-size';
  input.setAttribute('type', 'number');
  input.setAttribute('min', 1);
  input.setAttribute('max', 50);
  input.setAttribute('placeHolder', 'Board size');
  input.style.width = '100px';
  section.appendChild(input);

  const button = document.createElement('button');
  button.id = 'generate-board';
  button.innerHTML = 'Criar';

  button.addEventListener('click', () => {
    let getInputValue = document.querySelector('#board-size').value;

    if (getInputValue == '') {
      alert('Board inválido!');
    } else {
      if (getInputValue > 50) {
        getInputValue = 50;
      }
      if (getInputValue < 5) {
        getInputValue = 5;
      }
      document.querySelector('#board-size').value = getInputValue;
      quantPixels = getInputValue;
      const getPixelBoard = document.querySelector('#pixel-board');
      centerContent.removeChild(getPixelBoard);
      criaQuadro();
    }
  });
  section.appendChild(button);
  centerContent.appendChild(section);
}

function generateRGB() {
  let r;
  let g;
  let b;

  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
}
