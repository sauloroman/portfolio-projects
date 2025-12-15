import React from 'react'
import { Logo } from '.'
import { ButtonReturn } from './ButtonReturn'
import { ButtonProjects } from './ButtonProjects'
import { useNavPage } from '../../hooks'

interface Props {
  title: string
}

export const ProjectHeader: React.FC<Props> = ({ title }) => {

  const { pathname } = useNavPage()

  return (
    <div className='project-header container'>
      <div className="project-header__container">
        <div className='project-header__buttons'>
          <ButtonReturn />
          { pathname !== '/projects' && <ButtonProjects /> }
        </div>
        <div className='project-header__logo'>
          <p className='project-header__name'>{title}</p>
          <Logo />
        </div>
      </div>
    </div>
  )
}
