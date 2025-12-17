import React from 'react'
import type { Contact } from '../../../shared/interfaces/ui.interface'

export const contacts: Contact[] = [
  {
    concept: 'Email',
    icon: 'bx-envelope',
    message: 'Drop me a line anytime',
    value: 'sauloroman20_santillan@outlook.com',
    link: 'mailto:sauloroman20_santillan@outlook.com'
  },
  {
    concept: 'LinkedIn',
    icon: 'devicon-linkedin-plain',
    value: '/in/santillan-desarrolladorweb/',
    message: "Let's connect professionally",
    link: 'https://www.linkedin.com/in/santillan-desarrolladorweb/'
  },
  {
    concept: 'GitHub',
    icon: 'devicon-github-plain',
    value: '@sauloroman',
    message: 'Check out my code',
    link: 'https://github.com/sauloroman'
  },
  {
    concept: 'Phone',
    icon: 'bx-phone',
    message: 'Call me to book an interview',
    value: '+52 (449) 654 8073',
    link: 'tel:+524496548073'
  }
]

export const ContactSocial: React.FC = () => {
  return (
    <div className="portfolio-contact__content">
      <div className="portfolio-contact__top">
        <span className="portfolio-contact__sub">Contact</span>
        <h2 className="heading-section portfolio-contact__title">
          <div className="period period--medium"></div>
          Let’s Connect
          <div className="period period--medium"></div>
        </h2>
      </div>

      <ul className="portfolio-contact__list">
        {contacts.map(contact => (
          <li key={contact.concept} className="portfolio-contact__item">
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-contact__card"
            >
              <i className={`bx ${contact.icon}`} />

              <div className="portfolio-contact__text">
                <p className="portfolio-contact__concept">
                  {contact.concept}
                </p>
                <p className="portfolio-contact__value">
                  {contact.value}
                </p>
                <p className="portfolio-contact__message">
                  {contact.message}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
