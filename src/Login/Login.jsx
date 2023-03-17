import React, { useState } from 'react'

const Login = () => {
    const [login, setLogin ]  = useState('')
    const [senha, setSenha ]  = useState('')
    const [type, setType ]  = useState('password')
    const hideSenha = (length) => {
        let pass = ''
        for (let i = 0; i < length; i++) {
            pass +='*'
            
        }
        return pass
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        setLogin('')
        setSenha('')
    }
    const handleClick = () => {
        type === 'password' ? setType('text') : setType('password') 
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" placeholder='Login' onChange={(e)=> setLogin(e.target.value) }  value={login}/>
        </div>
        <div>
            <input type= {type} placeholder='Senha' onChange={(e)=> setSenha(e.target.value)}  value={senha}/>
        <a onClick={handleClick}>ver</a>
        </div>
        <div>
            <input type="submit" value='Login' />
        </div>
        <div>login: {login}</div>
        <div>senha: {hideSenha(senha.length)}</div>
    </form>
  )
}

export default Login
