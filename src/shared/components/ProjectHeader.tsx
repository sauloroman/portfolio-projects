import React from 'react'
import { Logo } from '.'
import { ButtonReturn } from './ButtonReturn'

interface Props {
  title: string
}

export const ProjectHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className='project-header container'>
      <div className="project-header__container">
        <ButtonReturn />
        <div className='project-header__logo'>
          <p className='project-header__name'>{title}</p>
          <Logo />
        </div>
      </div>
    </div>
  )
}
