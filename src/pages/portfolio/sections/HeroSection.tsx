import React from 'react'
import imgHero from '../../../assets/img/photo-2.jpg'

export const HeroSection: React.FC = () => {
  return (
    <section id='hero' className='portfolio-hero'>
      <div className="portfolio-hero__cover"></div>
      <div className="portfolio-hero__container">
        <div className="portfolio-hero__content">
          <div>
            <p className="portfolio-hero__name">
             Hi, My name is Roman Santillán 👋</p>
            <h1 className='heading-special gradient portfolio-hero__title'><span>FullStack</span>Web<br />Developer</h1>
            <p className="portfolio-hero__text">
              I'm a Software Developer dedicated to fulfill and carry out ideas and business models. I'm so passionate about programming and design and I like seeing code as a tool to find more efficient solutions and ways of communication.
              <span className="period period--small u-ml-1"></span>
            </p>
            <div className="portfolio-hero__bottom">
              <div className="portfolio-hero__buttons">
                <a href='#portfolio' className='btn btn--purple portfolio-hero__button'>
                  <i className='bx bx-briefcase btn__icon'></i>
                  My Projects
                </a>
                <a href='#' className='btn btn--outline portfolio-hero__button'>
                  <i className='bxr  bx-arrow-big-down-line btn__icon'></i> 
                  Download CV
                </a>
              </div>
              <div className="portfolio-hero__social-media">
                <a href='#' className="portfolio-hero__social">
                  <i className='bx bxl-linkedin-square' ></i>
                </a>
                <a target='_blank' href='https://github.com/sauloroman' className="portfolio-hero__social">
                  <i className='bx bxl-github' ></i>
                </a>
                <a href='#' className="portfolio-hero__social">
                  <i className='bx bxs-envelope' ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-hero__image-box">
          <img 
            className='portfolio-hero__image' 
            src={imgHero} 
            alt="Porfolio Image Saulo Román Santillán Nava" 
          />
        </div>
      </div>
    </section>
  )
}
