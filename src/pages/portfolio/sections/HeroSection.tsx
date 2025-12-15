import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { IoBriefcase  } from "react-icons/io5";
import { MdFileDownload } from "react-icons/md";
import { Title } from '../../project/components/Title';
import { HeroSlice } from '../components/HeroSlice';
import photo1 from '../../../assets/img/photo-1.jpg'
import photo2 from '../../../assets/img/photo-2.jpg'
import photo3 from '../../../assets/img/photo-3.jpg'

export const HeroSection: React.FC = () => {
  return (
    <section id='hero' className='portfolio-hero'>
      <div className="portfolio-hero__cover"></div>
      <div className="portfolio-hero__container">
        <div className="portfolio-hero__content">
          <div>
            <p className="portfolio-hero__name">Hi, My name is Roman Santillán 👋</p>
            
            <h1 className='heading-special gradient portfolio-hero__title'>
              <Title />
            </h1>
            <p className="portfolio-hero__text">
              I'm a Software Developer dedicated to fulfill and carry out ideas and business models. I'm so passionate about programming and design and I like seeing code as a tool to find more efficient solutions and ways of communication.
              <span className="period period--small u-ml-1"></span>
            </p>
            <div className="portfolio-hero__bottom">
              <div className="portfolio-hero__buttons">
                <a href='#portfolio' className='btn btn--purple portfolio-hero__button'>
                  <IoBriefcase className='btn__icon' />
                  My Projects
                </a>
                <a href='#' className='btn btn--outline portfolio-hero__button'>
                  <MdFileDownload className='btn__icon' />
                  Download CV
                </a>
              </div>
              <div className="portfolio-hero__social-media">
                <a target='_blank' href='https://www.linkedin.com/in/roman-santillan-desarrolladorfrontend/' className="portfolio-hero__social">
                  <FaLinkedin />
                </a>
                <a target='_blank' href='https://github.com/sauloroman' className="portfolio-hero__social">
                  <FaGithub />
                </a>
                <a target='_blank' href='mailto: romansantillan1998@outlook.com' className="portfolio-hero__social">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>
        <>
          <HeroSlice images={[ photo1, photo2, photo3 ]} />
        </>
      </div>
    </section>
  )
}
