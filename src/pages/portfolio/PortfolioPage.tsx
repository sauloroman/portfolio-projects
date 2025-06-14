import React, { useEffect } from 'react'
import { HeroSection } from './sections/HeroSection'
import { HeaderSection } from './sections/HeaderSection'
import { TechSection } from './sections/TechSection'
import { ServicesSection } from './sections/ServicesSection'
import { PortfolioSection } from './sections/PortfolioSection'
import { useProjects } from '../../hooks'

export const PortfolioPage: React.FC = () => {

  const { onGetProjects } = useProjects();

  useEffect(() => {
    onGetProjects()
  }, [])
  
  return (
    <div className='portfolio'>
      <div className="container">
        <HeaderSection />
        <HeroSection />
        <ServicesSection />
        <TechSection />
        <PortfolioSection />
      </div>
    </div>
  )
}
