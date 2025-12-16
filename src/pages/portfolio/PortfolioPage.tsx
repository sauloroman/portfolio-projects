import React from 'react'
import { HeroSection } from './sections/HeroSection'
import { HeaderSection } from './sections/HeaderSection'
import { TechSection } from './sections/TechSection'
import { ServicesSection } from './sections/ServicesSection'
import { PortfolioSection } from './sections/PortfolioSection'
import { EducationSection } from './sections/EducationSection'
import { useUI } from '../../hooks'
import { Footer } from '../../shared/components/footer/Footer'
import { ProjectModalContact } from './components/ProjectModalContact'
import { ModalNames } from '../../shared/interfaces/ui.interface'

export const PortfolioPage: React.FC = () => {

  const { modal } = useUI()
  
  return (
    <div className='portfolio'>
      <div>
        <HeaderSection />
        <HeroSection />
        <ServicesSection />
        <TechSection />
        <PortfolioSection />
        <EducationSection />
      </div>
      <Footer />
      { modal.isOpen && modal.name === ModalNames.contact && <ProjectModalContact />}
    </div>
  )
}
