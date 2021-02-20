// https://eduardobonizio.github.io/

const projectsLink = [
  './projetos/basico/project-color-guess/index.html',
  './projetos/basico/project-facebook-signup/index.html',
  './projetos/basico/project-lessons-learned/index.html',
  './projetos/basico/project-meme-generate/index.html',
  './projetos/basico/project-mistery-letter/index.html',
  './projetos/basico/project-pixels-art/index.html',
  './projetos/basico/project-todo-list/index.html',
];

const projectsName = [
  'Color guess',
  'Facebook signup',
  'Lessons learned',
  'Meme generate',
  'Mistery letter',
  'Pixels art',
  'Todo list',
];

const createLinks = () => {
  for (let index = 0; index < projectsLink.length; index += 1) {
    const createLink = document.createElement('a');
    createLink.setAttribute('href', projectsLink[index]);
    createLink.innerHTML = projectsName[index];
    document.querySelector('.links').appendChild(createLink);
  }
};

const footerElements = [
  './icons/iconfinder_online_social_media_linked_in_734383.png',
  './icons/iconfinder_github_social_media_logo_1221583.png',
  './icons/iconfinder_facebook_online_social_media_734399.png',
];

const footerLinks = [
  'http://linkedin.com/in/eduardo-bonizio',
  'http://github.com/eduardobonizio',
  'http://facebook.com/Eduardo.Bonizio',
];

const footer = () => {
  const footer = document.querySelector('footer');
  const createList = document.createElement('ul');
  for (let index = 0; index < footerElements.length; index += 1) {
    const createLine = document.createElement('li');

    const createLink = document.createElement('a');
    createLink.setAttribute('href', footerLinks[index]);
    createLink.setAttribute('target', '_blank');

    const createIcon = document.createElement('img');
    createIcon.setAttribute('src', footerElements[index]);
    createIcon.setAttribute('alt', '');

    createLink.appendChild(createIcon);
    createLine.appendChild(createLink);
    createList.appendChild(createLine);
  }
  footer.appendChild(createList);
};

createLinks();
footer();
