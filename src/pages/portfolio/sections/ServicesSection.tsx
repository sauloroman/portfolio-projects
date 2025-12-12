import React from 'react';
import { FaCode, FaServer } from "react-icons/fa";
import { MdOutlineDesignServices, MdOutlinePhoneAndroid } from "react-icons/md";

export const ServicesSection: React.FC = () => {
  return (
    <section id='services' className="portfolio-services">
      <div className="portolio-services__container">

        <div className="portfolio-services__top">
          <span className="portfolio-services__sub">Services</span>
          <h2 className="heading-section portfolio-services__title">
            <div className="period period--medium"></div>
            Expertise Service
            <div className="period period--medium"></div>
          </h2>
        </div>

        <div className="portfolio-services__icons">

          <div data-number="1" className="portfolio-services__icon">
            <div className="portfolio-services__box">
              <FaCode className='portfolio-services__figure' />
            </div>
            <h3>Web Development</h3>
            <p>High-quality, scalable web applications using clean, modern code practices.</p>
          </div>

          <div data-number="2" className="portfolio-services__icon">
            <div className="portfolio-services__box">
              <MdOutlineDesignServices className='portfolio-services__figure' />
            </div>
            <h3>Web Design</h3>
            <p>Clean, aesthetic and user-focused layouts designed to elevate brand identity.</p>
          </div>

          <div data-number="3" className="portfolio-services__icon">
            <div className="portfolio-services__box">
              <MdOutlinePhoneAndroid className='portfolio-services__figure' />
            </div>
            <h3>Responsive Design</h3>
            <p>Adaptive, seamless experiences across every screen and device.</p>
          </div>

          <div data-number="4" className="portfolio-services__icon">
            <div className="portfolio-services__box">
              <FaServer className='portfolio-services__figure' />
            </div>
            <h3>API & Backend Development</h3>
            <p>Secure, fast and scalable APIs built with modern backend technologies.</p>
          </div>

        </div>

      </div>
    </section>
  );
};
