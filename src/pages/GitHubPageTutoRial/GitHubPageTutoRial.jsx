/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Media } from 'reactstrap';

import image from '../../assets/Index';

export default function GitHubPageTutoRial() {
  return (
    <div className="container">
      <Media list>
        <Media body>
          <h1>Github pages com React</h1>
          <h5>
            Como postar seu React App diretamente na raíz do seu site no
            github.io
          </h5>
        </Media>
        <hr />
        <Media body className="mb-2">
          <Media heading>Criando o repositório</Media>
          Para iniciar, faça login no site do github, acesse{' '}
          <a href="https://github.com/new" target="_blank" rel="noreferrer">
            https://github.com/new
          </a>{' '}
          e crie um repositório público com o nome:{' '}
          <code>userName.github.io</code>, não esqueça de substituir o{' '}
          <code>userName</code> pelo nome do <b>seu usuário</b>!
          <Media body>
            <img
              src={image.GitHubNewRepo}
              alt="Novo repositório"
              style={{ maxWidth: '100%' }}
            />
          </Media>
        </Media>
        <hr />
        <Media body className="mb-2">
          <Media heading>Criando o app e vinculando com o github</Media>
          Abra o terminal na pasta onde você deseja criar o seu projeto e digite
          os comandos abaixo substituindo o <code>novo-app</code> pelo nome do
          seu app.
          <Media body>
            <p className="mt-2">
              <code>npx create-react-app novo-app</code>
            </p>
            <p>
              <code>cd novo-app</code>
            </p>
            <p>
              <code>npm install gh-pages --save-dev</code>
            </p>
          </Media>
          <Media body>
            Agora temos que vincular o app com o repositório que criamos no
            início, para isso, vá até a página do repositório, copie a chave SSH
            e rode o comando abaixo substituindo o trecho{' '}
            <code>SSH_DO_SEU_REPO</code> pelo código que você copiou.
            <p className="mt-2">
              <code>git remote add origin SSH_DO_SEU_REPO</code>
            </p>
          </Media>
          <Media body>
            <img
              src={image.RepoSSH}
              alt="Chave SSH do repositório"
              style={{ maxWidth: '100%' }}
            />
          </Media>
        </Media>
        <hr />
        <Media body className="mb-2">
          <Media heading>Configurar o package.json</Media>
          Vá até o arquivo package.json que está na raiz do seu projeto e, logo
          no início, adicione o código abaixo substituindo o{' '}
          <code>userName</code> pelo seu nome de usuário do github. Cuidado para
          não desafazer a estrutura do objeto, coloque o código na linha abaixo
          da abertura da chave.
          <p className="mt-2">
            <code>
              "homepage": "https://<b>userName</b>.github.io/"
            </code>
          </p>
          <Media body>
            Em seguida adicione os códigos abaixo dentro do objeto "scripts"
            <code>
              <p className="mt-2">"predeploy": "npm run build"</p>
            </code>
            <code>
              <p>"deploy": "gh-pages -d build"</p>
            </code>
            <p>O seu package.json ficará parecido com esse:</p>
          </Media>
          <Media body>
            <img
              src={image.PackageJson}
              alt="Chave SSH do repositório"
              style={{ maxWidth: '100%' }}
            />
          </Media>
        </Media>
        <hr />
        <Media body className="mb-2">
          <Media heading>Subir os arquivos para o repositório do github</Media>
          Suba os arquivos do projeto para a branch master com os comandos
          abaixo:
          <code>
            <p className="mt-2">git add .</p>
          </code>
          <code>
            <p>git commit -m "SeuCommit"</p>
          </code>
          <code>
            <p>git push --set-upstream origin master</p>
          </code>
          <code>
            <p>npm run deploy</p>
          </code>
          <p>
            Depois de rodar o último comando, será criada uma nova branch no seu
            repositório, sendo assim, teremos a branch Master e a branch
            gh-pages
          </p>
          <Media body>
            <img
              src={image.GhPagesBranch}
              alt="Chave SSH do repositório"
              style={{ maxWidth: '100%' }}
            />
          </Media>
        </Media>
        <hr />
        <Media body className="mb-2">
          <Media heading>Alterando a branch principal e acessando o site</Media>
          Acesse a página do seu repositório no github, clique no botão de
          settings do repositório e vá até a opção: "GitHub Pages". Clique no
          botão que mostra as branchs desse repositório e troque de "master"
          para "gh-pages", <b>não se esqueça de clicar em "save"</b>.
          <p>
            Agora é só acessar a sua página do github que estará funcionando
            normalmente <code>https://seuNomeDeUsuário.github.io/</code>
          </p>
          <p>
            Obs.: Talvez seja necessário aguardar alguns segundos para que o
            github.io atualize o conteúdo da sua página.
          </p>
          <p>
            Toda vez que você fizer alguma atualização no seu projeto, você terá
            que rodar os comandos <code>git add/push</code> para subir as
            atualizações para a master, e o comando <code>npm run deploy</code>{' '}
            para atualizar no github.io.
          </p>
          <Media body>
            <img
              src={image.SettingsDoRepositorio}
              alt="Chave SSH do repositório"
              style={{ maxWidth: '100%' }}
            />
          </Media>
        </Media>
        <Media body className="mb-2">
          <Media heading>
            Configurando o BrowserRouter (Opcional, apenas se você utilizar o
            sistema de Route)
          </Media>
          <p>
            Por último, vamos configurar o BrowserRouter para que possamos
            acessar o site diretamente por qualquer url. Ex.:{' '}
            <code>userName.github.io/news</code>.
          </p>
          <p>
            Se você utilizar apenas o BrowserRouter e tentar acessar diretamente
            uma url do seu site no github, que não seja o root, provavelmente
            encontrará o erro 404 File not found, por isso iremos utilizar dois
            scripts feitos pelo usuário{' '}
            <a
              href="https://github.com/rafgraph"
              target="_blank"
              rel="noreferrer"
            >
              rafgraph{' '}
            </a>
            e disponibilizado no repositório{' '}
            <a
              href="https://github.com/rafgraph/spa-github-pages"
              target="_blank"
              rel="noreferrer"
            >
              spa-github-pages
            </a>
          </p>
          <p>
            Até onde consegui entender, sempre que o site cair em uma página de
            erro 404, o script vai tentar redirecionar para um componente, se
            ele não encontrar esse componente, vai redirecionar para a homepage
            e se encontrar, redireciona para ele.
          </p>
          <p>Rode esse comando para instalar o react-router-dom</p>
          <p>
            <code>npm install --save react-router-dom</code>
          </p>
          <p>
            Importe o BrowserRouter no index.js do seu projeto. Do jeito que
            estou fazendo a importação abaixo, chamaremos o componente por
            Router e não por BrowserRouter
          </p>
          <p>
            <code>{`import { BrowserRouter as Router } from 'react-router-dom';`}</code>
          </p>
          <p>
            Adicione a prop <code>{`basename={process.env.PUBLIC_URL}`}</code>{' '}
            ao seu Router
          </p>
          <p>
            Seu <code>index.js</code> ficará parecido com esse:
          </p>
          <p>
            <code>{`<Router basename={process.env.PUBLIC_URL}> <App /> </Router>`}</code>
          </p>
          <p>
            Agora temos que adicionar dois scripts, o primeiro ficará no html do
            seu projeto, que está na pasta <code>public/index.html</code>
          </p>
          <p>
            Entre no repositório desse link{' '}
            <a
              href="https://github.com/rafgraph/spa-github-pages/blob/gh-pages/index.html"
              target="_blank"
              rel="noreferrer"
            >
              spa-github-pages/index.html
            </a>{' '}
            e copie tudo que está entre{' '}
            <code>{'<!-- Start Single Page Apps for GitHub Pages -->'}</code> e{' '}
            <code>{'<!-- End Single Page Apps for GitHub Pages -->'}</code>.
          </p>
          <p>
            Abra o seu arquivo <code>index.html</code> na pasta public e cole o
            código na linha anterior à que fecha a tag <code>{'</head>'}</code>
          </p>
          <p>
            Por último, entre nesse link do repositório{' '}
            <a
              href="https://github.com/rafgraph/spa-github-pages/blob/gh-pages/404.html"
              target="_blank"
              rel="noreferrer"
            >
              spa-github-pages/404.html
            </a>{' '}
            e copie todo o conteúdo do arquivo, navegue até a pasta{' '}
            <code>public</code> do seu projeto, crie um arquivo chamado de{' '}
            <code>404.html</code> e cole dentro dele o conteúdo que você acabou
            de copiar.
          </p>
          <p>
            Agora é só rodar os comandos <code>git add/push</code>, o{' '}
            <code>npm run deploy</code> e acessar o seu site no github.
          </p>
          <img
            src={image.FolderStructure}
            alt="Estrutura de arquivos"
            style={{ maxWidth: '100%' }}
          />
          <img
            className="mt-1"
            src={image.IndexHtml}
            alt="Demonstração do index.html"
            style={{ maxWidth: '100%' }}
          />
          <img
            className="mt-1"
            src={image.Html404}
            alt="Demonstração do 404.html"
            style={{ maxWidth: '100%' }}
          />
          <img
            className="mt-1"
            src={image.IndexJs}
            alt="Demonstração do Index.js"
            style={{ maxWidth: '100%' }}
          />
        </Media>
      </Media>
    </div>
  );
}
