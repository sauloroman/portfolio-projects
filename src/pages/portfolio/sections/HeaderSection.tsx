import React from 'react'
import { Logo, MenuButton } from '../../../shared/components'
import type { NavItem } from '../../../shared/interfaces/ui.interface'
import { ChangeThemeButton } from '../../../shared/components/ChangeThemeButton'

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
    <header className="portfolio-header">
      <div className='container portfolio-header__container'>
        <div className="portfolio-header__logo">
          <Logo />
          <p>oman</p>
        </div>

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
        
        <div className='portfolio-header__actions'>
          <ChangeThemeButton />
          <MenuButton />
        </div>
      </div>
    </header>
  )
}
