import React from 'react'
import { useNavPage } from '../../hooks'

export const ButtonReturn: React.FC = () => {

  const { onNavigateHomePage } = useNavPage();

  return (
    <button className='btn btn--outline' onClick={onNavigateHomePage}>
        <i className='bxr bx-chevron-left btn__icon'></i> 
        <p>Regresar</p>
    </button>
  )
}
