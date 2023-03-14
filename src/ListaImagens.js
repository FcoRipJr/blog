import React from 'react'

const ListaImagens = () => {
  const imagens = [
    'https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-png-0.png',
    'https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png',
    'https://logodownload.org/wp-content/uploads/2023/01/governo-federal-2023-logo-lula-0.png',
  ]
  return (
    <div>
        <ul>
          {
            imagens.map((imagem) => (
              <li><img src={imagem} alt="" /></li>
            ))
          }
        </ul>        
    </div>
  )
}

export default ListaImagens
