import React from 'react';
import { FaCode } from "react-icons/fa";
import { MdOutlineDesignServices, MdOutlinePhoneAndroid  } from "react-icons/md";

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
          <div className="portfolio-services__icon">
            <div className="portfolio-services__box">
              <FaCode className='portfolio-services__figure'/>
            </div>
            <h3>Web Development</h3>
            <p>Robust, scalable websites and apps built with clean, efficient code.</p>
          </div>
          <div className="portfolio-services__icon">
            <div className="portfolio-services__box">
              <MdOutlineDesignServices className='portfolio-services__figure' />
            </div>
            <h3>Web Design</h3>
            <p>Beautiful, intuitive layouts that align with your brand and engage your audience.</p>
          </div>
          <div className="portfolio-services__icon">
            <div className="portfolio-services__box">
              <MdOutlinePhoneAndroid className='portfolio-services__figure' />
            </div>
            <h3>Responsive Design</h3>
            <p>Pixel-perfect experiences across all devices—from phones to desktops.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
