import React from 'react'
import { Logo } from '../../../shared/components'

export const HeaderSection: React.FC = () => {
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

      <button className='portfolio-header__button btn btn--purple'>
        <i className='bx bx-right-arrow-alt btn__icon' ></i>
        Contact me
      </button>
    </header>
  )
}
