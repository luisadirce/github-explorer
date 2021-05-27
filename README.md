# Github explorer
<p >Esse é um projeto simples feito no curso Ignite da Rocketseat da trilha de ReactJS, com fins educacionais. Ele busca os repositórios da Rocketseat e os exibe em tela.</p>

🚧  🚀 Em construção...  🚧

<!--ts-->
   * [Sobre](#sobre)
   * [Como usar](#como-usar)
      * [Pre Requisitos](#pre-requisitos)
      * [Instalações](#instalacoes)
   * [Testes](#testes)
   * [Tecnologias](#tecnologias)
<!--te-->

<h3 id="sobre">Sobre</h3>
Esse projeto foi desenvolvido no Iginite da Rocketseat na trilha de ReactJS. É um curso bem completo com toda a parte teórica e prática. Este é o primeiro projeto do curso, o qual busca repositórios da Rocketseat do github e os exibe em tela.
A partir da criação desse e mais outros projetos, foram vistos conceitos de programação relacionados a ReactJS, como:

- Componentização
- Estado
- Imutabilidade
- Propriedades
- Hooks (useState, useEfect)
- Webpack
- Babel
- TypeScript
- SSR e SSG

<h3 id="pre-requisitos">Pré-requisitos</h3>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Node.js](https://nodejs.org/en/) e 
- [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable). 

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

<h3 id="instalacoes">Instalações</h3>

```bash

#Iniciar repositório:
$ yarn init -y

#Instalar react e react-dom:
$ yarn add react
$ yarn add react-dom
```

Babel:
```bash
#Instalar babel:
$ yarn add @babel/core @babel/cli @babel/preset-env -D

#Converter código para o bundle:
$ yarn babel src/index.js --out-file dist/bundle.js

#Instalar dependência:
$ yarn add @babel/preset-react -D
```

Webpack:
```bash
#Instalar webpack:
$ yarn add webpack webpack-cli -D

#Instalar a dependência babel-loader  para fazer a integração do babel com o webpack:
$ yarn add babel-loader

#Executar webpack:
$ yarn webpack

# Para não termos que nos procupar com passar a tag script no index.html, baixar um plugin do webpack que injeta o script no html:
$ yarn add html-webpack-plugin -D
```

Webpack Server:
```bash
#Instalar webpack server:
$ yarn add webpack-dev-server -D

#Executar :
$ yarn webpack serve
```

Ambiente dev e produção:
```bash
#Para gerar um ambiente para desenvolvimento e outro para produção:
$ NODE_ENV=production yarn webpack

#Executar :
$ yarn dev
```

Dependências de estilos:
```bash
$ yarn add style-loader css-loader -D
$ yarn add sass-loader -D
$ yarn add node-sass -D

```

Fast Refresh no Webpack:
```bash
$ yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh

```

<h3 id="testes">Testes</h3>

Em construção...

<h3 id="tecnologias">🛠 Tecnologias </h3>

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

