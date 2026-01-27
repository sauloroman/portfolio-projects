import React from 'react'
import { Logo } from '../Logo'
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export const Footer: React.FC = () => {
  const dateYear = new Date().getFullYear()
  
  return (
    <footer className='footer'>
      <div className="footer__container container">
        
        <div className="footer__item">
          <div className="footer__logo">
            <Logo /> 
            <p>oman</p>
          </div>
          <p className='footer__author'> @{dateYear} Design and developed by <br /> <cite>Saulo Román Santillán Nava</cite></p>
        </div>

        <div className='footer__item'>
          <h3 className='footer__item-title'>Contact</h3>
          <nav className='footer__nav'>
            <li className="footer__option">Phone: <span>+524496548073</span></li>
            <li className='footer__option'><span>sauloroman20_santillan@outlook.com</span></li>
          </nav>
        </div>

        <div className='footer__item'>
          <h3 className='footer__item-title'>Visit</h3>
          <nav className='footer__nav'>
            <li className="footer__option">República Mexicana #506. Valle Dorado, Aguascalientes, Ags. México</li>
          </nav>
        </div>

        <div className='footer__item'>
          <h3 className='footer__item-title'>Follow me</h3>
          <nav className='footer__nav'>
            <a target='_blank' href='https://www.linkedin.com/in/roman-santillan-desarrolladorfrontend/' className="footer__link">
              <span>Linkedln</span> 
              <CiLinkedin className='footer__link-icon' />
            </a>

            <a target='_blank' href='https://github.com/sauloroman' className="footer__link">
              <span>Github</span> 
              <FiGithub className='footer__link-icon' />
            </a>

            <a target='_blank' href='https://www.instagram.com/tuamigoinvitaciones/' className="footer__link">
              <span>Instagram</span>
              <FaInstagram className='footer__link-icon' />
            </a>
          </nav>
        </div>
        
      </div>
    </footer>
  )
}
