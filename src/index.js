import React from 'react';
import ReactDOM from 'react-dom/client';
import Alert from './Alert/Alert.js';
import Botao from './Botao';
import BotaoLegal from './BotaoLegal';
import ConsultaApi from './ConsultaApi';
import ListaImagens from './ListaImagens';
import ListaTarefas from './ListaTarefas';
import Logo from './Logo/Logo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <h1>Olá Mundo React</h1>
    <ConsultaApi/>
    <Botao/>
    <BotaoLegal/>
    <br />
    <BotaoLegal texto='Fazer Login'/>
    <Logo/>
    <ListaImagens/>
    <ListaTarefas/> 
    <Alert>
      <ul>
        <li>Erro1</li>
        <li>Erro2</li>
        <li>Erro3</li>
      </ul>
    </Alert>
    <br />
    <br />

    <Alert>
      <p>DESCRIÇÃO DO ERRO</p>
    </Alert>

  </div>
);
