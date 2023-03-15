import React from 'react'
import './BotaoLegal.css'
const BotaoLegal = ({texto='Cadastrar'}) => {
  return (
    <div>
      <button className='botaoLegal'>
        {texto}
      </button>
    </div>
  )
}

export default BotaoLegal
