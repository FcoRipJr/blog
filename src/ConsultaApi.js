import React, { useState } from 'react'

const ConsultaApi = () => {
    var [erro, setErro] = useState(false)

    setTimeout(()=>{setErro(true)}, 3000)
  return (
    <div>
      { erro == true ? (<p>Há erros</p>) : (null)}
    </div>
  )
}

export default ConsultaApi
