#!/bin/sh

clear

rm -f ./package-lock.json 2>/dev/null
rm -f ./yarn.lock 2>/dev/null
rm -rf ./node_modules 2>/dev/null

clear
#yarn install
npm install
rm -rf node_modules/gh-pages/.cache
npm install gh-pages --save-dev
npm install --save bootstrap
npm install --save jquery
npm install --save reactstrap react react-dom
npm install --save firebase
npm install @react-firebase/auth
npm install firebaseui --save
npm audit fix
