import React from 'react'
import imgHero from '../../../assets/img/photo-1.jpg'

export const HeroSection: React.FC = () => {
  return (
    <section className='portfolio-hero'>
      <div className="portfolio-hero__container">
        <div className="porfolio-hero__content">
          <h1 className="heading-primary">Hi, My name is Roman</h1>
        </div>
        <div className="portfolio-hero__image-box">
          <img 
            className='porfolio-hero__image' 
            src={imgHero} 
            alt="Porfolio Image Saulo Román Santillán Nava" 
          />
        </div>
      </div>
    </section>
  )
}
