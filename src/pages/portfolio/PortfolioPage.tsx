import React from 'react'
import { HeroSection } from './sections/HeroSection'
import { HeaderSection } from './sections/HeaderSection'
import { TechSection } from './sections/TechSection'
import { ServicesSection } from './sections/ServicesSection'
import { PortfolioSection } from './sections/PortfolioSection'
import { useUI } from '../../hooks'
import { Footer } from '../../shared/components/footer/Footer'
import { ProjectModalContact } from './components/ProjectModalContact'
import { ModalNames } from '../../store/ui/ui.slice'

export const PortfolioPage: React.FC = () => {

  const { modal } = useUI()
  
  return (
    <div className='portfolio'>
      <div className="container">
        <HeaderSection />
        <HeroSection />
        <ServicesSection />
        <TechSection />
        <PortfolioSection />
      </div>
      <Footer />
      { modal.isOpen && modal.name === ModalNames.contact && <ProjectModalContact />}
    </div>
  )
}
