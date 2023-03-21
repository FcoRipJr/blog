import React from 'react'
import Imagem from './Logo.png'
import styles from './Logo.module.css'
const Logo = () => {
  return (
    <div>
      <img src={Imagem} className={styles.logo} />
    </div>
  )
}

export default Logo
