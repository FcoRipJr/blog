import React from 'react'
import styles from './BotaoLegal.module.css'
const BotaoLegal = ({texto='Cadastrar', cor}) => {
  
  return (
    <div>
      <button className={styles.botaoLegal +' '+ styles[cor]}>
        {texto}
      </button>
    </div>
  )
}

export default BotaoLegal
