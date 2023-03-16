import React, { useState } from 'react'

const Login = () => {
    const [login, setLogin ]  = useState('')
    const [senha, setSenha ]  = useState('')
    const handleSubmit = (event)=>{
        event.preventDefault()
        setLogin('')
        setSenha('')
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" placeholder='Login' onChange={(e)=> setLogin(e.target.value) }  value={login}/>
        </div>
        <div>
            <input type="password" placeholder='Senha' onChange={(e)=> setSenha(e.target.value)}  value={senha}/>
        </div>
        <div>
            <input type="submit" value='Login' />
        </div>
        <div>login: {login}</div>
        <div>senha: {senha}</div>
    </form>
  )
}

export default Login
