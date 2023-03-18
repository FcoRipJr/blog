import React, { useState } from 'react'

const IMC = () => {
    const [peso, setPeso ]  = useState(0)
    const [altura, setAltura ]  = useState(0)
    const [imc, setIMC ]  = useState(0)
    const [type, setType ]  = useState('password')

    const getResultado = (val) => {
        let resultado = ''
        let cor = ''
        if (val > 0) {
            if (val < 18.5) {
                resultado = 'MAGRESSA'  
                cor = 'red'
            } else if(val < 24.9){
                resultado = 'NORMAL'
                cor = 'green'
            } else if(val < 29.9){
                resultado = 'SOBREPESO'
                cor = 'yellow'
            } else if(val < 39.9){
                resultado = 'OBESIDADE'
                cor = 'red'
            } else {
                resultado = 'OBESIDADE GRAVE'
                cor = 'red'
            }
        }
        return (<span style={"color"+{cor}+" ;"}>{resultado}</span>) 
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        if(peso > 0 && altura > 0 ){
            let calculo = peso / (altura*altura)
            setIMC(calculo)
        } else {
            setIMC(0)
        }
        setPeso(0)
        setAltura(0)
    }

    const handleClick = () => {
        setType(type === 'password' ? 'text' : 'password') 
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <input type="number" placeholder='Peso' onChange={(e)=> setPeso(e.target.value) }  value={peso}/>
        </div>
        <div>
            <input type='number' placeholder='Altura' onChange={(e)=> setAltura(e.target.value)}  value={altura}/>
        </div>
        <div>
            <input type="submit" value='Calcular' />
        </div>
        <div>IMC: {imc > 0 ? imc : ''}</div>
        <div>{getResultado(imc)}</div>
    </form>
  )
}

export default IMC