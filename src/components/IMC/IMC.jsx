import React, { useState } from 'react'
import styles from './IMC.module.css'

const IMC = () => {
    const [peso, setPeso ]  = useState()
    const [altura, setAltura ]  = useState()
    const [imc, setIMC ]  = useState(0)

    const getResultado = (val) => {
        let resultado = ''
        let cor = 'text-red'
        if (val > 0) {
            if (val < 18.5) {
                resultado = 'MAGRESSA'  
            } else if(val < 24.9){
                resultado = 'NORMAL'
                cor = 'text-green'
            } else if(val < 29.9){
                resultado = 'SOBREPESO'
                cor = 'text-yellow'
            } else if(val < 39.9){
                resultado = 'OBESIDADE'
            } else {
                resultado = 'OBESIDADE GRAVE'
            }
        }
        return (<span className={styles[cor]}>{resultado}</span>) 
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        if(peso > 0 && altura > 0 ){
            let calculo = peso / (altura*altura)
            setIMC(calculo)
        } else {
            setIMC(0)
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <input type="number" placeholder='Peso' step=".01" onChange={(e)=> setPeso(e.target.value) }  value={peso}/>
        </div>
        <div>
            <input type='number' placeholder='Altura' step=".01" onChange={(e)=> setAltura(e.target.value)}  value={altura}/>
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