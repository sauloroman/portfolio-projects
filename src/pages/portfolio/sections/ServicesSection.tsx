import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaServer } from "react-icons/fa"
import { MdOutlineDesignServices, MdOutlinePhoneAndroid } from "react-icons/md"
import { useScrollReveal } from '../../../hooks'

export const ServicesSection: React.FC = () => {

  const sectionRef = useRef<HTMLElement | null>(null)
  const { containerVariants, itemVariants, viewport } = useScrollReveal()

  useEffect(() => {
    const header = document.querySelector('.portfolio-header')
    const section = sectionRef.current
    if (!header || !section) return

    const sectionTop = section.offsetTop

    const onScroll = () => {
      if (window.scrollY >= sectionTop) {
        header.classList.add('portfolio-header--shadow')
      } else {
        header.classList.remove('portfolio-header--shadow')
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.section
      ref={sectionRef}
      id="services"
      className="portfolio-services"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={containerVariants}
    >
      <div className="portolio-services__container container">

        <motion.div
          className="portfolio-services__top"
          variants={itemVariants}
        >
          <span className="portfolio-services__sub">Services</span>
          <h2 className="heading-section portfolio-services__title">
            <div className="period period--medium"></div>
            Expertise Service
            <div className="period period--medium"></div>
          </h2>
        </motion.div>

        <motion.div
          className="portfolio-services__icons"
          variants={containerVariants}
        >
          {[ 
            { id: 1, icon: <FaCode />, title: "Web Development", desc: "High-quality, scalable web applications using clean, modern code practices." },
            { id: 2, icon: <MdOutlineDesignServices />, title: "Web Design", desc: "Clean, aesthetic and user-focused layouts designed to elevate brand identity." },
            { id: 3, icon: <MdOutlinePhoneAndroid />, title: "Responsive Design", desc: "Adaptive, seamless experiences across every screen and device." },
            { id: 4, icon: <FaServer />, title: "API & Backend Development", desc: "Secure, fast and scalable APIs built with modern backend technologies." }
          ].map(service => (
            <motion.div
              key={service.id}
              data-number={service.id}
              className="portfolio-services__icon"
              variants={itemVariants}
            >
              <div className="portfolio-services__box">
                {React.cloneElement(service.icon, {
                  className: 'portfolio-services__figure'
                })}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  )
}
