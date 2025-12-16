import React from 'react'
import { Logo } from '../../../shared/components'

interface NavItem {
  label: string
  href: string
  icon: string
}

const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '#hero',
    icon: 'bx-home'
  },
  {
    label: 'Service',
    href: '#services',
    icon: 'bx-briefcase'
  },
  {
    label: 'Skills',
    href: '#tech',
    icon: 'bx-code-alt'
  },
  {
    label: 'Portfolio',
    href: '#portfolio',
    icon: 'bx-layout'
  },
  {
    label: 'Education',
    href: '#education',
    icon: 'bx-book'
  },
  {
    label: 'Contact',
    href: '#contact',
    icon: 'bx-envelope'
  }
]

export const HeaderSection: React.FC = () => {
  return (
    <header className="portfolio-header container">
      <Logo />

      <nav className="portfolio-header__nav">
        {navItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            className="portfolio-header__link"
          >
            <i className={`bx ${item.icon}`} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </header>
  )
}
