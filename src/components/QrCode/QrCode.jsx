import React, { useState } from 'react'

const QrCode = () => {
    const [input, setInput ]  = useState('')
    const src_base= 'https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl='
    const [src, setSrc ]  = useState(src_base)

    const handleSubmit = (event)=>{
        event.preventDefault()
    }

    const handleChange = (value) => {
        setInput(value)
        console.log(input)
        setSrc(src_base+input) 
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" placeholder='Digite o conteudo do QrCode' onChange={(e)=> handleChange(e.target.value) }  value={input}/>
        </div>
       
        <div>
            <img src={src} alt="QrCode" />
        </div>
    </form>
  )
}

export default QrCode