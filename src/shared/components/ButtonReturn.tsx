import React from 'react'
import { useNavPage } from '../../hooks'

export const ButtonReturn: React.FC = () => {

  const { onNavigateHomePage } = useNavPage();

  return (
    <button className='button-return' onClick={onNavigateHomePage}>
        &larr;
        <p>Regresar a inicio</p>
    </button>
  )
}
