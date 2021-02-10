/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Media } from 'reactstrap';

export default function GitHubPageTutoRial() {
  return (
    <>
      <div className="container">
        <Media list>
          <Media body>
            <h1>Github pages com React</h1>
            <h5>
              Como criar sua página em react diretamente na raíz do seu site no
              github.io
            </h5>
            <hr />
          </Media>
          <Media body className="mb-2">
            <Media heading>Criando o repositório</Media>
            Para iniciar, faça login no site do github, acesse{' '}
            <a href="https://github.com/new" target="_blank" rel="noreferrer">
              https://github.com/new
            </a>{' '}
            e crie um repositório público com o nome:{' '}
            <code>userName.github.io</code>, não esqueça de substituir o{' '}
            <code>userName</code> pelo nome do <b>seu usuário</b>!
          </Media>
          <Media body>
            <img
              src="GitHubNewRepo.png"
              alt="Novo repositório"
              style={{ maxWidth: '100%' }}
            />
          </Media>
          <hr />
          <Media body className="mb-2">
            <Media heading>Criando o app e vinculando com o github</Media>
            Abra o terminal na pasta onde você deseja criar o seu projeto e
            digite os comandos abaixo substituindo o <code>novo-app</code> pelo
            nome do seu app.
          </Media>
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
            Agora temos que vincular o app que acabamos de criar com o
            repositório que criamos lá no início, para isso, vá até a página do
            repositório, copie a chave SSH e rode o comando abaixo substituindo
            o trecho <code>SSH_DO_SEU_REPO</code> pelo código que você copiou.
            <p className="mt-2">
              <code>git remote add origin SSH_DO_SEU_REPO</code>
            </p>
          </Media>
          <Media body>
            <img
              src="RepoSSH.png"
              alt="Chave SSH do repositório"
              style={{ maxWidth: '100%' }}
            />
          </Media>
          <hr />
          <Media body className="mb-2">
            <Media heading>Configurar o package.json</Media>
            Vá até o arquivo package.jon que está na raiz do seu projeto e logo
            no início adicione o código abaixo substituindo o{' '}
            <code>userName</code> pelo seu nome de usuário do github. Cuidado
            para não desafazer a estrutura do objeto, coloque o código na linha
            abaixo da abertura da chave.
            <p className="mt-2">
              <code>
                "homepage": "https://<b>userName</b>.github.io/"
              </code>
            </p>
            <Media body>
              Em seguida adicione o código abaixo dentro do objeto "scripts"
              <code>
                <p className="mt-2">"predeploy": "npm run build"</p>
              </code>
              <code>
                <p>"deploy": "gh-pages -d build"</p>
              </code>
              <p>O seu package.json ficará parecido com esse:</p>
              <Media body>
                <img
                  src="PackageJson.png"
                  alt="Chave SSH do repositório"
                  style={{ maxWidth: '100%' }}
                />
              </Media>
              <hr />
              <Media body className="mb-2">
                <Media heading>
                  Subir os arquivos para o repositório do github
                </Media>
                Estamos quase no fim do guia, agora suba os arquivos do projeto
                para a branch master com os comandos abaixo:
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
                  Depois de rodar o último comando, será criada uma nova branch
                  no seu repositório, sendo assim, teremos a branch Master e a
                  branch gh-pages
                </p>
                <Media body>
                  <img
                    src="GhPagesBranch.png"
                    alt="Chave SSH do repositório"
                    style={{ maxWidth: '100%' }}
                  />
                </Media>
              </Media>
              <hr />
              <Media body className="mb-2">
                <Media heading>
                  Alterando a branch principal e acessando o site
                </Media>
                Acesse a página do seu repositório no github, clique no botão de
                settings do repositório e vá até a opção: "GitHub Pages". Clique
                no botão que mostra as branchs desse repositório e troque de
                "master" para "gh-pages",{' '}
                <b>não se esqueça de clicar em "save"</b>.
                <p>
                  Agora é só acessar a sua página do github que está funcionando
                  normalmente <code>https://seuNomeDeUsuário.github.io/</code>
                </p>
              </Media>
              <Media body>
                <img
                  src="SettingsDoRepositorio.gif"
                  alt="Chave SSH do repositório"
                  style={{ maxWidth: '100%' }}
                />
              </Media>
            </Media>
          </Media>
        </Media>
      </div>
    </>
  );
}
