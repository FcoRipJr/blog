import React, { useState } from 'react'



const Botao = () => {

var [clicksNoBotao, setClicksNoBotao ]  = useState(0);

const handleClick = () => {
    setClicksNoBotao(++clicksNoBotao)
}

  return (
    <div>
      <button onClick={ handleClick }>Clique em mim</button>
      <p>{ clicksNoBotao }</p>
    </div>
  )
}

export default Botao
