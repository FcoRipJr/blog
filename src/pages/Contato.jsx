import React from 'react'
import { Link } from 'react-router-dom'

const Contato = () => {

  const usuarios = [ 
    {id: 1, nome: 'João'},
    {id: 2, nome: 'Maria'},
    {id: 3, nome: 'Roberta'},
  ]

  return (
    <div> 
      {
        usuarios.map((usuario) => (
          <div>
              <span>{usuario.nome} </span> <br />
              <Link to={`/usuario/${usuario.id}`}>Editar Usuário</Link> <br /> <br /> 
          </div>
        ))
      }
        
    </div>
  )
}

export default Contato
