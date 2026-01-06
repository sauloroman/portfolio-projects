import React from 'react'
import { Link } from 'react-router-dom'
import { useUI } from '../../hooks'
import type { NavItem } from '../interfaces/ui.interface'

interface MenuItem {
    label: string
    href: string
    icon: string
    highlight?: boolean
}

const menuItems: MenuItem[] = [
    {
        label: 'Portfolio',
        href: '/',
        icon: 'bx-user'
    },
    {
        label: 'Projects',
        href: '/projects',
        icon: 'bx-layout',
        highlight: true
    },
    // {
    //     label: 'Digital Invitations',
    //     href: '/digital-invitations',
    //     icon: 'bx-party',
    // }
]

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

export const Menu: React.FC = () => {
    const { onCloseAsideMenu, asideMenuOpen } = useUI()

    return (
        <aside className={`menu ${asideMenuOpen ? 'menu--open' : 'menu--close'}`}>
            <div className="menu__container">

                <div className="menu__brand">
                    <div>
                        <h2>Roman.dev</h2>
                        <p>Creative Developer</p>
                    </div>
                    <div className="menu__close" onClick={onCloseAsideMenu}>
                        <i className='bxr bx-x'></i>
                    </div>
                </div>

                <nav className="menu__sections">
                    <div className='menu__subtitle'>
                        <p>Portfolio Sections</p>
                        <div className="menu__line"></div>
                    </div>
                    {navItems.map(item => (
                        <a
                            onClick={onCloseAsideMenu}
                            key={item.href}
                            href={item.href}
                            className='menu__link'
                        >
                            <i className={`bx ${item.icon}`} />
                            <span>{item.label}</span>
                        </a>
                    ))}
                </nav>

                <nav className="menu__nav">
                    <div className='menu__subtitle'>
                        <p>Internal Pages</p>
                        <div className="menu__line"></div>
                    </div>
                    {menuItems.map(item => (
                        <Link
                            onClick={onCloseAsideMenu}
                            key={item.href}
                            to={item.href}
                            className={`menu__link ${item.highlight ? 'menu__link--highlight' : ''}`}
                        >
                            <i className={`bx ${item.icon}`} />
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </nav>


                <div className="menu__footer">
                    <p>Building ideas with code ✨</p>
                </div>

            </div>
        </aside>
    )
}
