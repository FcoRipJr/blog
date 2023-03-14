import React from 'react';
import ReactDOM from 'react-dom/client';
import Botao from './Botao';
import ListaTarefas from './ListaTarefas';
import Logo from './Logo/Logo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <h1>Olá Mundo React</h1>
    <Botao/>
    <Logo/>
    <ListaTarefas/>

  </div>
);
