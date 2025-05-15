import React, { useEffect } from 'react'
import { HeroSection } from './sections/HeroSection'
import { HeaderSection } from './sections/HeaderSection'
import { TechSection } from './sections/TechSection'
import { ServicesSection } from './sections/ServicesSection'
import { PortfolioSection } from './sections/PortfolioSection'
import { useProjects } from '../../hooks/useProjects'

export const PortfolioPage: React.FC = () => {

  const { onGetProjects } = useProjects()

  useEffect(() => {
    onGetProjects()
  }, [])

  return (
    <div className='portfolio container'>
      <HeaderSection />
      <HeroSection />
      <ServicesSection />
      <TechSection />
      <PortfolioSection />
    </div>
  )
}
