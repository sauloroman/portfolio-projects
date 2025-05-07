import React from 'react'
import { HeroSection } from './sections/HeroSection'
import { HeaderSection } from './sections/HeaderSection'
import { TechSection } from './sections/TechSection'

export const PortfolioPage: React.FC = () => {
  return (
    <div className='portfolio container'>
      <HeaderSection />
      <HeroSection />
      <TechSection />
    </div>
  )
}
