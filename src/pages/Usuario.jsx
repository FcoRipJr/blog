import React from 'react'
import { useParams } from 'react-router-dom'

const Usuario = () => {
  const { id } = useParams()
  return (
    <div>
      <h1>Edição de Usuário</h1>
      <h5>Você está editando o usuário de id: {id}</h5>
    </div>
  )
}

export default Usuario
