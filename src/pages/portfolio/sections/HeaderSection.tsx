import React from 'react'
import { Logo } from '../../../shared/components'
import { GrContact } from "react-icons/gr";
import { useUI } from '../../../hooks';
import { ModalNames } from '../../../store/ui/ui.slice';

export const HeaderSection: React.FC = () => {
  
  const { onOpenModal } = useUI()
  
  return (
    <header className='portfolio-header'>
      <Logo />

      <nav className="portfolio-header__nav">
        <a className='portfolio-header__link' href="#hero">Home</a>
        <a className='portfolio-header__link' href="#services">Service</a>
        <a className='portfolio-header__link' href="#tech">Skills</a>
        <a className='portfolio-header__link' href="#portfolio">Portfolio</a>
        <a className='portfolio-header__link' href="#about">About</a>
      </nav>

      <button onClick={() => onOpenModal( ModalNames.contact ) } className='portfolio-header__button btn btn--purple'>
        <GrContact className='btn__icon' /> 
        Contact me
      </button>
    </header>
  )
}
