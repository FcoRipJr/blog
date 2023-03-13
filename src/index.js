import React from 'react';
import ReactDOM from 'react-dom/client';
import Botao from './Botao';
import Logo from './Logo/Logo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <h1>Olá Mundo</h1>
    <Botao/>
    <Logo/>

  </div>
);
