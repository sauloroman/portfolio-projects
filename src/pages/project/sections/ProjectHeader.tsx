import React from 'react'
import { Logo } from '../../../shared/components'
import { ButtonReturn } from '../../../shared/components/ButtonReturn'

export const ProjectHeader: React.FC = () => {
  return (
    <div className='project-header container'>
        <div className="project-header__container">
            <ButtonReturn />
            <Logo />
        </div>
    </div>
  )
}
