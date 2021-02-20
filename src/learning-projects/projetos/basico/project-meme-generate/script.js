const img = document.querySelector('#meme-image');

function addListenerToTextToMeme() {
  const textInput = document.querySelector('#text-input');
  const memeText = document.querySelector('#meme-text');
  textInput.addEventListener('keyup', event => {
    memeText.innerHTML = event.target.value;
  });
}

function addEventHandler() {
  const getInput = document.querySelector('#meme-insert');
  getInput.addEventListener('change', event => {
    img.setAttribute('src', '');
    img.src = URL.createObjectURL(event.target.files[0]);
    img.onload = function () {
      URL.revokeObjectURL(img.src); // free memory
    };
    /* now you can work with the file list https://developer.mozilla.org/pt-BR/docs/Web/API/File/Using_files_from_web_applications */
  });
}

function addListenerToBorderButtons() {
  const buttonsId = ['#fire', '#water', '#earth'];
  for (let index = 0; index < buttonsId.length; index += 1) {
    const currentButton = document.querySelector(buttonsId[index]);
    currentButton.addEventListener('click', () => {
      const imgContainer = document.querySelector('#meme-image-container');
      if (index === 0) {
        imgContainer.style.border = '3px dashed red';
      } else if (index === 1) {
        imgContainer.style.border = '5px double blue';
      } else if (index === 2) {
        imgContainer.style.border = '6px groove green';
      }
    });
  }
}

function addListenerToMemeTemplate() {
  const memeTemplateContainer = document.querySelectorAll('.meme-template');
  for (let index = 0; index < memeTemplateContainer.length; index += 1) {
    memeTemplateContainer[index].addEventListener('click', event => {
      const memeTemplate = event.target.src;
      img.src = memeTemplate;
    });
  }
}

window.onload = function () {
  addListenerToTextToMeme();
  addListenerToBorderButtons();
  addListenerToMemeTemplate();
  addEventHandler();
};
