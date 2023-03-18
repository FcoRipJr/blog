import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ConverteDolar = () => {
    const [valorReal,setValorReal] = useState()
    const [valorDolar,setValorDolar] = useState(0)
    const [valorConversao,setValorConversao] = useState(0)
    useEffect(() => {
        axios.get('https://economia.awesomeapi.com.br/json/last/USD-BRL')
        .then((response) => {
            setValorConversao(response.data.USDBRL.bid)
        })
    }, [])

    const handleSubmit = (event)=>{
      event.preventDefault()
      
      setValorDolar(valorReal*valorConversao)
  }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            R$ <input type="number" placeholder='valor em Real' step=".01" onChange={(e)=> setValorReal(e.target.value) }  value={valorReal}/>
        </div>
        <div>
            <input type="submit" value='Converter' />
        </div>
        <div>Valor em Dolar: {valorDolar > 0 ? "$ "+valorDolar : ''}</div>
    </form>
  )
}

export default ConverteDolar