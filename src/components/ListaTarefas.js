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
         { tarefas.map((tarefa, index)=> (
            <li key={index}>{ tarefa }</li>
         )) }
       </ul>
    </div>
  )
}

export default ListaTarefas
