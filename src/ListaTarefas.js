import React from 'react'

const ListaTarefas = () => {

    const tarefas = [
        "Passear",
        "Compras",
        "Limpar",
        "Estudar",
    ]
  return (
    <div>
       <ul>
         { tarefas.map((tarefa)=> (
            <li>{ tarefa }</li>
         )) }
       </ul>
    </div>
  )
}

export default ListaTarefas
