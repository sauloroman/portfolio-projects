import React from 'react'
import { useNavPage } from '../../hooks'
import { MdKeyboardReturn } from "react-icons/md";

export const ButtonReturn: React.FC = () => {

  const { onNavigateHomePage } = useNavPage();

  return (
    <button className='btn btn--outline' onClick={onNavigateHomePage}>
        <MdKeyboardReturn className='btn__icon' />
        <p>Regresar</p>
    </button>
  )
}
