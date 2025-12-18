import React from 'react'
import { HeroSection } from './sections/HeroSection'
import { HeaderSection } from './sections/HeaderSection'
import { TechSection } from './sections/TechSection'
import { ServicesSection } from './sections/ServicesSection'
import { PortfolioSection } from './sections/PortfolioSection'
import { EducationSection } from './sections/EducationSection'
import { useProjects, useUI } from '../../hooks'
import { Footer } from '../../shared/components/footer/Footer'
import { ProjectModalContact } from './components/ProjectModalContact'
import { ModalNames } from '../../shared/interfaces/ui.interface'
import { Menu } from '../../shared/components/Menu'
import { ContactSection } from './sections/ContactSection'
import { AlertModal } from '../../shared/components/AlertModal'
import { Loader } from '../../shared/components/Loader'

export const PortfolioPage: React.FC = () => {

  const { modal, alert } = useUI()
  const { isLoading } = useProjects()

  if (isLoading) {
    return (
      <div className='project-loader'>
        <Loader />
      </div>
    )
  }

  return (
    <div className='portfolio'>
      <div>
        <HeaderSection />
        <HeroSection />
        <ServicesSection />
        <TechSection />
        <PortfolioSection />
        <EducationSection />
        <ContactSection />
      </div>
      <Footer />
      <Menu />
      {modal.isOpen && modal.name === ModalNames.contact && <ProjectModalContact />}
      {alert.isOpen && <AlertModal />}
    </div>
  )
}
