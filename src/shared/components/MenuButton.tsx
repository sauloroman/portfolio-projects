import React from 'react'
import { useUI } from '../../hooks'

export const MenuButton: React.FC = () => {
  const { onOpenAsideMenu } = useUI()
  return (
    <button onClick={ onOpenAsideMenu } className='btn btn--menu'>
        <i className='bxr bx-menu'></i> 
    </button>
  )
}
