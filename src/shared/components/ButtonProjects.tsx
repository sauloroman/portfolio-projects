import React from 'react'
import { useNavPage } from '../../hooks'
import { IoBriefcaseOutline } from "react-icons/io5";

export const ButtonProjects: React.FC = () => {

  const { onNavigatePage } = useNavPage();

  return (
    <button className='btn btn--purple' onClick={() => onNavigatePage('/projects')}>
        <IoBriefcaseOutline className='btn__icon' />
        <p>Projects</p>
    </button>
  )
}
