(this["webpackJsonpgithub-pages-edu"]=this["webpackJsonpgithub-pages-edu"]||[]).push([[0],{117:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var r=a(3),c=a.n(r),n=a(26),o=a.n(n),s=a(20),i=a(18),d=a(16),l=a(47),u=(a(86),a(88),l.a.initializeApp({apiKey:"AIzaSyAuv8U5q6c_jbJiE5CviIt0LPlGb0o6jnU",authDomain:"edu-bonizio-io.firebaseapp.com",databaseURL:"https://edu-bonizio-io-default-rtdb.firebaseio.com",projectId:"edu-bonizio-io",storageBucket:"edu-bonizio-io.appspot.com",messagingSenderId:"204932734023",appId:"1:204932734023:web:6135c1b8796d42a24e6562",measurementId:"G-JNPJ0VCYZJ"})),j=new l.a.auth.GoogleAuthProvider,b=u,h=a(2),p=c.a.createContext(),m=function(e){var t=e.children,a=Object(r.useState)(null),c=Object(d.a)(a,2),n=c[0],o=c[1],s=Object(r.useState)(!0),i=Object(d.a)(s,2),l=i[0],u=i[1];return Object(r.useEffect)((function(){b.auth().onAuthStateChanged((function(e){o(e),u(!1)}))}),[]),l?Object(h.jsx)(h.Fragment,{children:"Loading..."}):Object(h.jsxs)(p.Provider,{value:{currentUser:n},children:[t,console.log(n)]})};function x(){return Object(h.jsxs)("footer",{className:"footer",children:[Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"container mt-3",style:{height:"60px"},children:Object(h.jsx)("span",{className:"text-muted",children:"Footer under construction"})})]})}var O=a(122),g=a(123),f=a(124),v=a(125),S=a(126),y=a(127),w=a(128),N=a(145),E=a(143),C=a(144),k=a(129),A=a(130),R=function(){var e=Object(s.c)((function(e){return e.gameConfig})),t=Object(r.useState)(!1),a=Object(d.a)(t,2),c=a[0],n=a[1],o=function(){return n(!c)};return Object(h.jsx)(O.a,{color:"dark",dark:!0,expand:"sm",className:"mb-2",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(g.a,{tag:i.c,to:"/",children:"Home"}),Object(h.jsx)(f.a,{onClick:o}),Object(h.jsxs)(v.a,{isOpen:c,navbar:!0,children:[Object(h.jsxs)(S.a,{className:"mr-auto",navbar:!0,children:[Object(h.jsx)(y.a,{children:Object(h.jsx)(w.a,{onClick:function(){return c&&o()},tag:i.c,to:"/game",children:"Quizz"})}),Object(h.jsx)(y.a,{children:Object(h.jsx)(w.a,{onClick:function(){return c&&o()},tag:i.c,to:"/30-dias-css",children:"Desafio CSS"})}),Object(h.jsxs)(N.a,{nav:!0,inNavbar:!0,children:[Object(h.jsx)(E.a,{nav:!0,caret:!0,children:"Guias"}),Object(h.jsx)(C.a,{right:!0,children:Object(h.jsx)(k.a,{onClick:function(){return c&&o()},tag:i.c,to:"/github-pages-react",children:"Github pages com react"})})]})]}),Object(h.jsx)(A.a,{children:Object(h.jsxs)("div",{onClick:function(){return b.auth().signOut()},children:[e&&e.user,e&&e.score>=0&&" ".concat(e.score,"pts")]})})]})]})})},P=a(11),q=a(19),I=a(76),D=function(e){var t=e.component,a=Object(I.a)(e,["component"]),c=Object(r.useContext)(p).currentUser;return Object(h.jsx)(P.b,Object(q.a)(Object(q.a)({},a),{},{render:function(e){return c?Object(h.jsx)(t,Object(q.a)({},e)):Object(h.jsx)(P.a,{to:"/login"})}}))};function U(){return Object(h.jsx)("div",{className:"container d-flex justify-content-center",children:"30 dias de css"})}var _=a(131),z=a(73),H=[{author:"Rodrigo de Souza",gitHubId:"rodrigoDeSouzaFernandes",github:"https://github.com/rodrigoDeSouzaFernandes",url:"https://rodrigodesouzafernandes.github.io/count-down/",photo:"http://avatars.githubusercontent.com/u/72228436?s=460&u=e498085a542b1539c9bfedc91eb7de82d49ebadb&v=4"},{author:"Viviane Silva Florido",gitHubId:"vivianeflowt",github:"https://github.com/vivianeflowt",url:"https://vivianeflowt.github.io/countdown-trybe/",photo:"https://avatars.githubusercontent.com/u/22636948?s=460&u=d569693f84bc221fbf3e57d921efeef93b2706d2&v=4"},{author:"Filipe Louzano",gitHubId:"MEianelli",github:"https://github.com/MEianelli",url:"https://meianelli.github.io/cronometro/",photo:"https://avatars.githubusercontent.com/u/29641380?s=460&u=7ff5887636b65898cd9ead6b9eacb70916163894&v=4"}];a(117);function T(){var e=Object(r.useState)(Object(z.toNumber)(localStorage.getItem("clockOfTheDay"))),t=Object(d.a)(e,2),a=t[0],c=(t[1],Object(r.useState)(0)),n=Object(d.a)(c,2),o=n[0],s=n[1],i=function(){var e=a+1;if(e>=H.length)return localStorage.setItem("clockOfTheDay",0),H[0];return localStorage.setItem("clockOfTheDay",e),H[e]}();var l=0;return Object(r.useEffect)((function(){var e=setInterval((function(){return l<=2?(l+=.1,console.log("entrei"),s(Number(100*l))):clearInterval(e)}),100);return function(){clearInterval(e)}}),[]),Object(h.jsxs)("div",{className:"container d-flex flex-column align-items-center",children:[Object(h.jsx)("p",{className:"mt-3",children:"Redirecionando"}),Object(h.jsx)("div",{style:{width:"100%",marginBottom:"50px"},children:Object(h.jsx)(_.a,{style:{height:"50px"},value:o})}),Object(h.jsx)("meta",{httpEquiv:"refresh",content:"1.6; URL='".concat(i.url,"'")})]})}var W=a(132),L=a(133),F=a(134),J=a(135),G=a(70);function B(e){return{type:"NEW_USER",payload:e}}function M(){var e=Object(s.c)((function(e){return e.gameConfig})),t=Object(s.b)(),a=Object(r.useState)(e&&e.user),c=Object(d.a)(a,2),n=c[0],o=c[1],l=Object(r.useState)(),u=Object(d.a)(l,2),j=u[0],b=u[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"container d-flex justify-content-center",children:Object(h.jsxs)(W.a,{children:[Object(h.jsxs)(L.a,{children:[Object(h.jsx)(F.a,{for:"user",children:"Nome"}),Object(h.jsx)(J.a,{type:"text",name:"user",id:"user",placeholder:e&&e.user?e.user:"Seu nome ou nickname",onChange:function(e){return o(e.target.value)}})]}),Object(h.jsxs)(L.a,{children:[Object(h.jsx)(F.a,{for:"temeSelection",children:"Tema"}),Object(h.jsxs)(J.a,{type:"select",name:"theme",id:"temeSelection",onChange:function(e){return b(e.target.value)},children:[Object(h.jsx)("option",{}),Object(h.jsx)("option",{children:"Enfermagem"})]})]}),n&&j?Object(h.jsx)(G.a,{type:"button",onClick:function(){var a=e&&e.score?e.score:0,r=e&&e.answered?e.answered:[],c={user:n,score:a,theme:j,answered:r,lastAnswered:e&&e.lastAnswered||1};n&&j&&(localStorage.setItem("userConfig",JSON.stringify(c)),t(B(c)))},tag:i.c,to:"/game/start",children:"Iniciar"}):Object(h.jsx)(G.a,{type:"button",children:"Iniciar"})]})})})}var Q=a(13),V=a.n(Q),K=a(52),Y=a(21),Z=a(141);function X(e,t){return $.apply(this,arguments)}function $(){return($=Object(Y.a)(V.a.mark((function e(t,a){var r,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=b.database().ref(t).child(a),e.next=3,r.once("value").then((function(e){return e.val()}));case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(e){var t=e.sort((function(e,t){return e-t})).find((function(t,a){return t-e[a+1]<-1}));if(t)return t+1;var a=e[e.length-1];return e[0]?a+1:1}var te=a(136),ae=a(137),re=a(138),ce=a(139),ne=a(140),oe=function(e){var t=Object(r.useState)(),a=Object(d.a)(t,2),c=a[0],n=a[1],o=Object(r.useState)(!1),s=Object(d.a)(o,2),i=s[0],l=s[1],u=e.question,j=u.question,b=u.theme,p=u.options,m=u.id,x=e.answer,O=e.newCard;return Object(h.jsx)(te.a,{children:Object(h.jsxs)(ae.a,{children:[Object(h.jsxs)(re.a,{tag:"h5",className:"mb-2",children:["Tema: ",b]}),Object(h.jsx)(ce.a,{children:j}),Object(h.jsx)(L.a,{children:Object(h.jsx)(ne.a,{className:"mt-2 mb-1",children:p.map((function(e,t){var a=m+t;return Object(h.jsx)(G.a,{className:"option",style:{whiteSpace:"pre-line"},color:"secondary",size:"lg",block:!0,onClick:function(e){return n(e.target)},children:e},a)}))})}),Object(h.jsxs)("div",{className:"d-flex justify-content-around flex-wrap",children:[Object(h.jsx)(G.a,{disabled:!0,children:"Curtir"}),Object(h.jsx)(G.a,{onClick:function(){c&&(i||x(c,m),i&&(O(),n(),function(){var e=document.querySelectorAll(".option");e&&e.forEach((function(e){e.classList.remove("btn-danger"),e.classList.remove("btn-success"),e.disabled=!1}))}()),l(!i))},children:i?"Pr\xf3xima pergunta":"Confirmar"})]})]})})};function se(){Object(P.g)();var e=Object(s.b)(),t=Object(s.c)((function(e){return e.gameConfig})),a=Object(r.useState)(null),c=Object(d.a)(a,2),n=c[0],o=c[1],i=Object(r.useState)(0),l=Object(d.a)(i,2),u=l[0],j=l[1],b=Object(r.useState)(t&&t.answered||[0]),p=Object(d.a)(b,2),m=p[0],x=p[1],O=Object(r.useState)(!1),g=Object(d.a)(O,2),f=g[0],v=g[1],S=Object(r.useState)(!0),y=Object(d.a)(S,2),w=y[0],N=y[1];function E(e){return C.apply(this,arguments)}function C(){return(C=Object(Y.a)(V.a.mark((function e(t){var a,r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ee(t),e.next=3,X("questions",a);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return A.apply(this,arguments)}function A(){return(A=Object(Y.a)(V.a.mark((function e(){var a,r,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!1),e.next=3,E(m);case 3:if(a=e.sent){e.next=15;break}return r=t.answered,e.next=8,E(r);case 8:if((c=e.sent)===n){e.next=13;break}return x(r),o(c),e.abrupt("return");case 13:return v(!0),e.abrupt("return");case 15:o(a),x([].concat(Object(K.a)(m),[a.id])),window.scrollTo({top:0,left:0,behavior:"smooth"}),N(!0);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){return k()}),[]),Object(r.useEffect)((function(){localStorage.setItem("userConfig",JSON.stringify(t))}),[t]),Object(h.jsx)("div",{className:"container d-flex justify-content-center",children:!f&&n&&Object(h.jsx)(Z.a,{timeout:100,in:w,children:Object(h.jsx)(oe,{question:n,answer:function(a,r){if(a){var c=document.querySelectorAll(".option"),o=a.innerText===n.correctAnswer;if(o){j(u+1);var s=t.answered?[].concat(Object(K.a)(t.answered),[r]).sort((function(e,t){return e-t})):[r];e(function(e){return{type:"UPDATE_SCORE",payload:e}}(t.score+=1)),e({type:"UPDATE_ANSWERED_QUESTIONS",payload:s})}o||a.classList.add("btn-danger"),c.forEach((function(e){e.innerText===n.correctAnswer&&e.classList.add("btn-success"),e.disabled=!0})),e(function(e){return{type:"UPDATE_LAST_ANSWRED_QUESTION",payload:e}}(r))}},newCard:k})})})}var ie=a(142),de={FolderStructure:a.p+"static/media/FolderStructure.2cf3bc35.png",GhPagesBranch:a.p+"static/media/GhPagesBranch.379bfdee.png",GitHubNewRepo:a.p+"static/media/GitHubNewRepo.0fdd9f93.png",HomePagePackageJson:a.p+"static/media/HomePagePackageJson.275ab571.png",Html404:a.p+"static/media/Html404.d2894536.png",IndexHtml:a.p+"static/media/IndexHtml.a8b1f75a.png",IndexJs:a.p+"static/media/IndexJs.a500db59.png",PackageJson:a.p+"static/media/PackageJson.41cc1681.png",Redirecting:a.p+"static/media/Redirecting.73e73be9.gif",RepoSSH:a.p+"static/media/RepoSSH.d0b3b939.png",SettingsDoRepositorio:a.p+"static/media/SettingsDoRepositorio.1b01995f.gif"};function le(){return Object(h.jsxs)(h.Fragment,{children:[console.log(de),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(ie.a,{list:!0,children:[Object(h.jsxs)(ie.a,{body:!0,children:[Object(h.jsx)("h1",{children:"Github pages com React"}),Object(h.jsx)("h5",{children:"Como postar seu React App diretamente na ra\xedz do seu site no github.io"})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)(ie.a,{body:!0,className:"mb-2",children:[Object(h.jsx)(ie.a,{heading:!0,children:"Criando o reposit\xf3rio"}),"Para iniciar, fa\xe7a login no site do github, acesse"," ",Object(h.jsx)("a",{href:"https://github.com/new",target:"_blank",rel:"noreferrer",children:"https://github.com/new"})," ","e crie um reposit\xf3rio p\xfablico com o nome:"," ",Object(h.jsx)("code",{children:"userName.github.io"}),", n\xe3o esque\xe7a de substituir o"," ",Object(h.jsx)("code",{children:"userName"})," pelo nome do ",Object(h.jsx)("b",{children:"seu usu\xe1rio"}),"!",Object(h.jsx)(ie.a,{body:!0,children:Object(h.jsx)("img",{src:de.GitHubNewRepo,alt:"Novo reposit\xf3rio",style:{maxWidth:"100%"}})})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)(ie.a,{body:!0,className:"mb-2",children:[Object(h.jsx)(ie.a,{heading:!0,children:"Criando o app e vinculando com o github"}),"Abra o terminal na pasta onde voc\xea deseja criar o seu projeto e digite os comandos abaixo substituindo o ",Object(h.jsx)("code",{children:"novo-app"})," pelo nome do seu app.",Object(h.jsxs)(ie.a,{body:!0,children:[Object(h.jsx)("p",{className:"mt-2",children:Object(h.jsx)("code",{children:"npx create-react-app novo-app"})}),Object(h.jsx)("p",{children:Object(h.jsx)("code",{children:"cd novo-app"})}),Object(h.jsx)("p",{children:Object(h.jsx)("code",{children:"npm install gh-pages --save-dev"})})]}),Object(h.jsxs)(ie.a,{body:!0,children:["Agora temos que vincular o app com o reposit\xf3rio que criamos no in\xedcio, para isso, v\xe1 at\xe9 a p\xe1gina do reposit\xf3rio, copie a chave SSH e rode o comando abaixo substituindo o trecho"," ",Object(h.jsx)("code",{children:"SSH_DO_SEU_REPO"})," pelo c\xf3digo que voc\xea copiou.",Object(h.jsx)("p",{className:"mt-2",children:Object(h.jsx)("code",{children:"git remote add origin SSH_DO_SEU_REPO"})})]}),Object(h.jsx)(ie.a,{body:!0,children:Object(h.jsx)("img",{src:de.RepoSSH,alt:"Chave SSH do reposit\xf3rio",style:{maxWidth:"100%"}})})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)(ie.a,{body:!0,className:"mb-2",children:[Object(h.jsx)(ie.a,{heading:!0,children:"Configurar o package.json"}),"V\xe1 at\xe9 o arquivo package.json que est\xe1 na raiz do seu projeto e, logo no in\xedcio, adicione o c\xf3digo abaixo substituindo o"," ",Object(h.jsx)("code",{children:"userName"})," pelo seu nome de usu\xe1rio do github. Cuidado para n\xe3o desafazer a estrutura do objeto, coloque o c\xf3digo na linha abaixo da abertura da chave.",Object(h.jsx)("p",{className:"mt-2",children:Object(h.jsxs)("code",{children:['"homepage": "https://',Object(h.jsx)("b",{children:"userName"}),'.github.io/"']})}),Object(h.jsxs)(ie.a,{body:!0,children:['Em seguida adicione os c\xf3digos abaixo dentro do objeto "scripts"',Object(h.jsx)("code",{children:Object(h.jsx)("p",{className:"mt-2",children:'"predeploy": "npm run build"'})}),Object(h.jsx)("code",{children:Object(h.jsx)("p",{children:'"deploy": "gh-pages -d build"'})}),Object(h.jsx)("p",{children:"O seu package.json ficar\xe1 parecido com esse:"})]}),Object(h.jsx)(ie.a,{body:!0,children:Object(h.jsx)("img",{src:de.PackageJson,alt:"Chave SSH do reposit\xf3rio",style:{maxWidth:"100%"}})})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)(ie.a,{body:!0,className:"mb-2",children:[Object(h.jsx)(ie.a,{heading:!0,children:"Subir os arquivos para o reposit\xf3rio do github"}),"Suba os arquivos do projeto para a branch master com os comandos abaixo:",Object(h.jsx)("code",{children:Object(h.jsx)("p",{className:"mt-2",children:"git add ."})}),Object(h.jsx)("code",{children:Object(h.jsx)("p",{children:'git commit -m "SeuCommit"'})}),Object(h.jsx)("code",{children:Object(h.jsx)("p",{children:"git push --set-upstream origin master"})}),Object(h.jsx)("code",{children:Object(h.jsx)("p",{children:"npm run deploy"})}),Object(h.jsx)("p",{children:"Depois de rodar o \xfaltimo comando, ser\xe1 criada uma nova branch no seu reposit\xf3rio, sendo assim, teremos a branch Master e a branch gh-pages"}),Object(h.jsx)(ie.a,{body:!0,children:Object(h.jsx)("img",{src:de.GhPagesBranch,alt:"Chave SSH do reposit\xf3rio",style:{maxWidth:"100%"}})})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)(ie.a,{body:!0,className:"mb-2",children:[Object(h.jsx)(ie.a,{heading:!0,children:"Alterando a branch principal e acessando o site"}),'Acesse a p\xe1gina do seu reposit\xf3rio no github, clique no bot\xe3o de settings do reposit\xf3rio e v\xe1 at\xe9 a op\xe7\xe3o: "GitHub Pages". Clique no bot\xe3o que mostra as branchs desse reposit\xf3rio e troque de "master" para "gh-pages", ',Object(h.jsx)("b",{children:'n\xe3o se esque\xe7a de clicar em "save"'}),".",Object(h.jsxs)("p",{children:["Agora \xe9 s\xf3 acessar a sua p\xe1gina do github que estar\xe1 funcionando normalmente ",Object(h.jsx)("code",{children:"https://seuNomeDeUsu\xe1rio.github.io/"})]}),Object(h.jsx)("p",{children:"Obs.: Talvez seja necess\xe1rio aguardar alguns segundos para que o github.io atualize o conte\xfado da sua p\xe1gina."}),Object(h.jsxs)("p",{children:["Toda vez que voc\xea fizer alguma atualiza\xe7\xe3o no seu projeto, voc\xea ter\xe1 que rodar os comandos ",Object(h.jsx)("code",{children:"git add/push"})," para subir as atualiza\xe7\xf5es para a master, e o comando"," ",Object(h.jsx)("code",{children:"npm run deploy"})," para atualizar no github.io."]}),Object(h.jsx)(ie.a,{body:!0,children:Object(h.jsx)("img",{src:de.SettingsDoRepositorio,alt:"Chave SSH do reposit\xf3rio",style:{maxWidth:"100%"}})})]}),Object(h.jsxs)(ie.a,{body:!0,className:"mb-2",children:[Object(h.jsx)(ie.a,{heading:!0,children:"Configurando o BrowserRouter (Opcional, apenas se voc\xea utilizar o sistema de Route)"}),Object(h.jsxs)("p",{children:["Por \xfaltimo, vamos configurar o BrowserRouter para que possamos acessar o site diretamente por qualquer url. Ex.:"," ",Object(h.jsx)("code",{children:"userName.github.io/news"}),"."]}),Object(h.jsxs)("p",{children:["Se voc\xea utilizar apenas o BrowserRouter e tentar acessar diretamente uma url do seu site no github, que n\xe3o seja o root, provavelmente encontrar\xe1 o erro 404 File not found, por isso iremos utilizar dois scripts feitos pelo usu\xe1rio"," ",Object(h.jsxs)("a",{href:"https://github.com/rafgraph",target:"_blank",rel:"noreferrer",children:["rafgraph"," "]}),"e disponibilizado no reposit\xf3rio"," ",Object(h.jsx)("a",{href:"https://github.com/rafgraph/spa-github-pages",target:"_blank",rel:"noreferrer",children:"spa-github-pages"})]}),Object(h.jsx)("p",{children:"At\xe9 onde consegui entender, sempre que o site cair em uma p\xe1gina de erro 404, o script vai tentar redirecionar para um componente, se ele n\xe3o encontrar esse componente, vai redirecionar para a homepage e se encontrar, redireciona para ele."}),Object(h.jsx)("p",{children:"Rode esse comando para instalar o react-router-dom"}),Object(h.jsx)("p",{children:Object(h.jsx)("code",{children:"npm install --save react-router-dom"})}),Object(h.jsx)("p",{children:"Importe o BrowserRouter no index.js do seu projeto. Do jeito que estou fazendo a importa\xe7\xe3o abaixo, chamaremos o componente por Router e n\xe3o por BrowserRouter"}),Object(h.jsx)("p",{children:Object(h.jsx)("code",{children:"import { BrowserRouter as Router } from 'react-router-dom';"})}),Object(h.jsxs)("p",{children:["Adicione a prop ",Object(h.jsx)("code",{children:"basename={process.env.PUBLIC_URL}"})," ","ao seu Router"]}),Object(h.jsxs)("p",{children:["Seu ",Object(h.jsx)("code",{children:"index.js"})," ficar\xe1 parecido com esse:"]}),Object(h.jsx)("p",{children:Object(h.jsx)("code",{children:"<Router basename={process.env.PUBLIC_URL}> <App /> </Router>"})}),Object(h.jsxs)("p",{children:["Agora temos que adicionar dois scripts, o primeiro ficar\xe1 no html do seu projeto, que est\xe1 na pasta ",Object(h.jsx)("code",{children:"public/index.html"})]}),Object(h.jsxs)("p",{children:["Entre no reposit\xf3rio desse link"," ",Object(h.jsx)("a",{href:"https://github.com/rafgraph/spa-github-pages/blob/gh-pages/index.html",target:"_blank",rel:"noreferrer",children:"spa-github-pages/index.html"})," ","e copie tudo que est\xe1 entre"," ",Object(h.jsx)("code",{children:"\x3c!-- Start Single Page Apps for GitHub Pages --\x3e"})," ","e ",Object(h.jsx)("code",{children:"\x3c!-- End Single Page Apps for GitHub Pages --\x3e"}),"."]}),Object(h.jsxs)("p",{children:["Abra o seu arquivo ",Object(h.jsx)("code",{children:"index.html"})," na pasta public e cole o c\xf3digo na linha anterior \xe0 que fecha a tag"," ",Object(h.jsx)("code",{children:"</head>"})]}),Object(h.jsxs)("p",{children:["Por \xfaltimo, entre nesse link do reposit\xf3rio"," ",Object(h.jsx)("a",{href:"https://github.com/rafgraph/spa-github-pages/blob/gh-pages/404.html",target:"_blank",rel:"noreferrer",children:"spa-github-pages/404.html"})," ","e copie todo o conte\xfado do arquivo, navegue at\xe9 a pasta"," ",Object(h.jsx)("code",{children:"public"})," do seu projeto, crie um arquivo chamado de"," ",Object(h.jsx)("code",{children:"404.html"})," e cole dentro dele o conte\xfado que voc\xea acabou de copiar."]}),Object(h.jsxs)("p",{children:["Agora \xe9 s\xf3 rodar os comandos ",Object(h.jsx)("code",{children:"git add/push"}),", o"," ",Object(h.jsx)("code",{children:"npm run deploy"})," e acessar o seu site no github."]}),Object(h.jsx)("img",{src:de.FolderStructure,alt:"Estrutura de arquivos",style:{maxWidth:"100%"}}),Object(h.jsx)("img",{className:"mt-1",src:de.IndexHtml,alt:"Demonstra\xe7\xe3o do index.html",style:{maxWidth:"100%"}}),Object(h.jsx)("img",{className:"mt-1",src:de.Html404,alt:"Demonstra\xe7\xe3o do 404.html",style:{maxWidth:"100%"}}),Object(h.jsx)("img",{className:"mt-1",src:de.IndexJs,alt:"Demonstra\xe7\xe3o do Index.js",style:{maxWidth:"100%"}})]})]})})]})}function ue(){return Object(h.jsx)("div",{className:"container d-flex justify-content-center",children:"Construindo"})}var je=Object(P.h)((function(e){var t=e.history,a=Object(r.useCallback)(function(){var e=Object(Y.a)(V.a.mark((function e(a){var r,c,n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),r=a.target.elements,c=r.email,n=r.password,e.prev=2,e.next=5,b.auth().signInWithEmailAndPassword(c.value,n.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(r.useContext)(p).currentUser?Object(h.jsx)(P.a,{to:"/"}):Object(h.jsxs)("div",{className:"container d-flex flex-column align-items-center",children:[Object(h.jsx)("h1",{children:"Log in"}),Object(h.jsxs)("form",{onSubmit:a,className:"d-flex flex-column",children:[Object(h.jsxs)("label",{htmlFor:"email",className:"d-flex flex-column",children:["Email",Object(h.jsx)("input",{name:"email",type:"email",placeholder:"Email"})]}),Object(h.jsxs)("label",{htmlFor:"password",className:"d-flex flex-column",children:["Password",Object(h.jsx)("input",{name:"password",type:"password",placeholder:"Password"})]}),Object(h.jsx)("button",{type:"submit",style:{width:"100%",backgroundColor:"transparent",border:"none"},children:"Log in"})]}),Object(h.jsx)("button",{type:"submit",style:{width:"100%",backgroundColor:"transparent",border:"none"},children:Object(h.jsx)(i.b,{to:"/signup",children:"Sign Up"})}),Object(h.jsx)("button",{type:"button",style:{width:"100%",backgroundColor:"transparent",border:"none"},onClick:function(){u.auth.signInWithPopup(j)},children:"Sign in with Google"})]})})),be=Object(P.h)((function(e){var t=e.history,a=Object(r.useCallback)(function(){var e=Object(Y.a)(V.a.mark((function e(a){var r,c,n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),r=a.target.elements,c=r.email,n=r.password,e.prev=2,e.next=5,b.auth().createUserWithEmailAndPassword(c.value,n.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(h.jsxs)("div",{className:"container d-flex flex-column align-items-center",children:[Object(h.jsx)("h1",{children:"Sign up"}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("form",{onSubmit:a,className:"d-flex flex-column",children:[Object(h.jsxs)("label",{htmlFor:"email",className:"d-flex flex-column",children:["Email",Object(h.jsx)("input",{name:"email",type:"email",placeholder:"Email"})]}),Object(h.jsxs)("label",{htmlFor:"password",className:"d-flex flex-column",children:["Password",Object(h.jsx)("input",{name:"password",type:"password",placeholder:"Password"})]}),Object(h.jsx)("button",{type:"submit",style:{width:"100%",backgroundColor:"transparent",border:"none"},children:"Sign Up"})]}),Object(h.jsx)("button",{type:"submit",style:{width:"100%",backgroundColor:"transparent",border:"none"},children:Object(h.jsx)(i.b,{to:"/login",children:"Login"})})]})]})}));function he(){return Object(h.jsxs)(P.d,{children:[Object(h.jsx)(P.b,{path:"/",exact:!0,component:ue}),Object(h.jsx)(P.b,{path:"/login",exact:!0,component:je}),Object(h.jsx)(P.b,{path:"/signup",exact:!0,component:be}),Object(h.jsx)(P.b,{path:"/github-pages-react",exact:!0,component:le}),Object(h.jsx)(D,{path:"/game",exact:!0,component:M}),Object(h.jsx)(D,{path:"/game/start",exact:!0,component:se}),Object(h.jsx)(P.b,{path:"/cronometers",exact:!0,component:T}),Object(h.jsx)(P.b,{path:"/30-dias-css",exact:!0,component:U}),Object(h.jsx)(P.b,{path:"/30-dias-css/:day",exact:!0,component:U}),Object(h.jsx)(P.a,{from:"*",to:"/"})]})}a(119);function pe(){return Object(s.b)()(B(JSON.parse(localStorage.getItem("userConfig")))),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(R,{}),Object(h.jsx)(he,{}),Object(h.jsx)(x,{})]})}var me=a(29),xe=a(74),Oe=a(75),ge={userName:"",score:void 0,gameTheme:"",lastAnswered:1,answered:[]};var fe=Object(me.combineReducers)({gameConfig:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"UPDATE_USER_NAME":return Object(q.a)(Object(q.a)({},e),{},{userName:r});case"UPDATE_SCORE":return Object(q.a)(Object(q.a)({},e),{},{score:r});case"UPDATE_ANSWERED_QUESTIONS":return Object(q.a)(Object(q.a)({},e),{},{answered:r});case"UPDATE_LAST_ANSWRED_QUESTION":return Object(q.a)(Object(q.a)({},e),{},{lastAnswered:r});case"UPDATE_THEME":return Object(q.a)(Object(q.a)({},e),{},{gameTheme:r});case"NEW_USER":return r;default:return e}}}),ve=Object(me.createStore)(fe,Object(xe.composeWithDevTools)(Object(me.applyMiddleware)(Oe.a)));a(120);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(s.a,{store:ve,children:Object(h.jsx)(m,{children:Object(h.jsx)(i.a,{basename:"",children:Object(h.jsx)(pe,{})})})})}),document.getElementById("app"))}},[[121,1,2]]]);
//# sourceMappingURL=main.43d86f92.chunk.js.map