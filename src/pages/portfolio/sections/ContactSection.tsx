import React from 'react'
import { ContactSocial } from '../components/ContactSocial'
import { ContactForm } from '../components/ContactForm'
import { useMessage } from '../../../hooks'
import { Loader } from '../../../shared/components/Loader'

export const ContactSection: React.FC = () => {
  const { isLoading } = useMessage()

  return (
    <section className='portfolio-contact'>
      <div className="portfolio-contact__container container">
        <ContactSocial />
        {
          isLoading 
          ? (<div className='portfolio-contact__loader'><Loader /></div>)
          : (<ContactForm />)
        }        
      </div>
    </section>
  )
}
