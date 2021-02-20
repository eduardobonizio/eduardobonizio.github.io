const centerContent = document.querySelector('.center-content');

// Carrega a lista de tarefa que foi salva
window.onload = function () {
  const taskList = document.querySelector('#lista-tarefas');
  const taskListToLoad = localStorage.getItem('taskList');
  taskList.innerHTML = taskListToLoad;

  const allTaks = document.querySelectorAll('li');

  if (allTaks.length < 1) {
  } else {
    for (let i = 0; i < allTaks.length; i += 1) {
      addListenersToListItem(allTaks[i]);
    }
  }
};

// Cria o header e o texto que explica
createBasics();
buttonDeleteAll();
buttonDeleteFinished();
saveTasks();
buttonMoveTask();
buttonRemoveSelected();

function createBasics() {
  // Cria o header
  const section = document.createElement('section');
  section.innerHTML = 'Minha Lista de Tarefas';
  centerContent.appendChild(section);

  // Cria o parágrafo
  const instruction = document.createElement('p');
  instruction.id = 'funcionamento';
  instruction.innerHTML =
    'Clique duas vezes em um item para marcá-lo como completo';
  centerContent.appendChild(instruction);

  // Chama a função que cria o input e botão de add
  createInput();

  // Cria a lista ordenada
  const list = document.createElement('ol');
  list.id = 'lista-tarefas';
  centerContent.appendChild(list);
}

function createInput() {
  // Cria section
  const div = document.createElement('div');
  centerContent.appendChild(div);

  // Cria input
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  div.appendChild(input);

  // Cria o botão
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerHTML = 'Criar';

  // Adiciona ao botão a função de adicionar itens a lista e limpar o input
  button.addEventListener('click', () => {
    const lista = document.querySelector('#lista-tarefas');
    const novaTarefa = document.querySelector('#texto-tarefa').value;

    // Cria a nova linha, adiciona o texto a ela e associa a lista
    const novaLinha = document.createElement('li');
    novaLinha.innerHTML = novaTarefa;
    novaLinha.className = '';
    addListenersToListItem(novaLinha);
    lista.appendChild(novaLinha);

    // Limpa o campo input
    document.querySelector('#texto-tarefa').value = '';
  });

  div.appendChild(button);
}

function addListenersToListItem(listItem) {
  // Adiciona um listener a essa nova linha para que quando for clicado troque a cor de fundo
  listItem.addEventListener('click', event => {
    const getAllListItems = document.querySelectorAll('li');
    for (let i = 0; i < getAllListItems.length; i += 1) {
      getAllListItems[i].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });

  // Adiciona um listener a essa nova linha para que quando for clicado duas vezes o texto fique riscado
  listItem.addEventListener('dblclick', event => {
    const checkClasses = event.target.className;

    if (checkClasses == '') {
      event.target.className = 'completed';
    } else {
      event.target.className = '';
    }
  });
}

function buttonDeleteAll() {
  const div = document.createElement('div');
  div.id = 'options-buttons';
  centerContent.appendChild(div);

  const button = document.createElement('button');
  button.id = 'apaga-tudo';
  button.innerHTML = 'Apagar tudo';

  button.addEventListener('click', () => {
    const getTaskList = document.querySelector('#lista-tarefas');
    const getAllItems = document.querySelectorAll('li');

    for (let i = 0; i < getAllItems.length; i += 1) {
      getTaskList.removeChild(getAllItems[i]);
    }
  });

  div.appendChild(button);
}

function buttonDeleteFinished() {
  const optionsButtons = document.querySelector('#options-buttons');
  const button = document.createElement('button');
  button.id = 'remover-finalizados';
  button.innerHTML = 'Remover finalizados';

  button.addEventListener('click', () => {
    const getTaskList = document.querySelector('#lista-tarefas');
    const getAllFinished = document.querySelectorAll('.completed');

    for (let i = 0; i < getAllFinished.length; i += 1) {
      getTaskList.removeChild(getAllFinished[i]);
    }
  });
  optionsButtons.appendChild(button);
}

function saveTasks() {
  const optionsButtons = document.querySelector('#options-buttons');
  const button = document.createElement('button');
  button.id = 'salvar-tarefas';
  button.innerHTML = 'Salvar tarefas';

  button.addEventListener('click', () => {
    const getAllListItems = document.querySelectorAll('li');
    for (let i = 0; i < getAllListItems.length; i += 1) {
      getAllListItems[i].style.backgroundColor = '';
    }
    const taskListToSave = document.querySelector('#lista-tarefas').innerHTML;
    localStorage.setItem('taskList', taskListToSave);
  });
  optionsButtons.appendChild(button);
}

function buttonMoveTask() {
  const optionsButtons = document.querySelector('#options-buttons');
  const buttonUp = document.createElement('button');
  buttonUp.id = 'mover-cima';
  buttonUp.innerHTML = 'Mover para cima';

  const buttonDown = document.createElement('button');
  buttonDown.id = 'mover-baixo';
  buttonDown.innerHTML = 'Mover para baixo';

  buttonUp.addEventListener('click', () => {
    const getList = document.querySelector('#lista-tarefas');
    const taskSelected = getSelected();
    const { firstChild } = getList;

    if (taskSelected == firstChild || taskSelected == null) {
    } else {
      const previousTask = taskSelected.previousSibling;
      getList.insertBefore(taskSelected, previousTask);
    }
  });

  optionsButtons.appendChild(buttonUp);

  buttonDown.addEventListener('click', () => {
    const getList = document.querySelector('#lista-tarefas');
    const taskSelected = getSelected();
    const { lastChild } = getList;

    if (taskSelected == lastChild || taskSelected == null) {
    } else {
      const nextTask = taskSelected.nextSibling;
      getList.insertBefore(nextTask, taskSelected);
    }
  });

  optionsButtons.appendChild(buttonDown);
}

function buttonRemoveSelected() {
  const optionsButtons = document.querySelector('#options-buttons');
  const button = document.createElement('button');
  button.id = 'remover-selecionado';
  button.innerHTML = 'Remover selecionado';

  button.addEventListener('click', () => {
    const getList = document.querySelector('#lista-tarefas');
    getList.removeChild(getSelected());
  });

  optionsButtons.appendChild(button);
}

function getSelected() {
  const allItems = document.querySelectorAll('li');
  for (let i = 0; i < allItems.length; i += 1) {
    if (allItems[i].style.backgroundColor != '') {
      return allItems[i];
    }
  }
}
