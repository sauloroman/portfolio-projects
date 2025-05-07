import React from 'react'
import imgHero from '../../../assets/img/photo-2.jpg'
import dots from '../../../assets/img/dots.png'

export const HeroSection: React.FC = () => {
  return (
    <section className='portfolio-hero'>
      <div className="portfolio-hero__container">
        <div className="portfolio-hero__content">
          <img loading='lazy' className='portfolio-hero__dots' src={dots} alt="Dots image" />
          <div>
            <p className="portfolio-hero__name">
             Hi, My name is Roman Santillán 👋</p>
            <h1 className='heading-special gradient portfolio-hero__title'><span>FullStack</span>Web<br />Developer</h1>
            <p className="portfolio-hero__text">
              I'm a Software Developer dedicated to fulfill and carry out ideas and business models. I'm so passionate about programming and design and I like seeing code as a tool to find more efficient solutions and ways of communication.
              <div className="period period--small u-ml-1"></div>
            </p>
            <div className="portfolio-hero__bottom">
              <div className="portfolio-hero__buttons">
                <button className='btn btn--black'>
                  <i className='bx bx-message-square-dots btn__icon'></i>
                  Contact me
                </button>
                <button className='btn btn--outline'>
                  <i className='bx bx-download btn__icon' ></i>
                  Download CV
                </button>
              </div>
              <div className="portfolio-hero__social-media">
                <a href='#' className="portfolio-hero__social">
                  <i className='bx bxl-linkedin-square' ></i>
                </a>
                <a href='#' className="portfolio-hero__social">
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
