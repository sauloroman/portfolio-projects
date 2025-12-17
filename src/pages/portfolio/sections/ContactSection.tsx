import React from 'react'
import { ContactSocial } from '../components/ContactSocial'
import { ContactForm } from '../components/ContactForm'

export const ContactSection: React.FC = () => {
  return (
    <section className='portfolio-contact'>
      <div className="portfolio-contact__container container">
        <ContactSocial />
        <ContactForm />
      </div>
    </section>
  )
}
