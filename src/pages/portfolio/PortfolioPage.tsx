import React from 'react'
import { HeroSection } from './sections/HeroSection'
import { HeaderSection } from './sections/HeaderSection'
import { TechSection } from './sections/TechSection'
import { ServicesSection } from './sections/ServicesSection'
import { PortfolioSection } from './sections/PortfolioSection'

export const PortfolioPage: React.FC = () => {
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
