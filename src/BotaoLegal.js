import React from 'react'
import styles from './BotaoLegal.module.css'
const BotaoLegal = ({texto='Cadastrar'}) => {
  return (
    <div>
      <button className={styles.botaoLegal}>
        {texto}
      </button>
    </div>
  )
}

export default BotaoLegal
