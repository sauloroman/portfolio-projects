import React from 'react'
import { Link } from 'react-router-dom'
import { useUI } from '../../hooks'

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
        icon: 'bx-layout'
    },
    {
        label: 'Digital Invitations',
        href: '/digital-invitations',
        icon: 'bx-party',
        highlight: true
    }
]

export const Menu: React.FC = () => {
    const { onCloseAsideMenu, asideMenuOpen } = useUI()
    return (
        <aside className={`menu ${asideMenuOpen ? 'menu--open' : 'menu--close'}`}>
            <div className="menu__container">

                <div className="menu__brand">
                    <div>
                        <span className="menu__dot" />
                        <h2>Roman.dev</h2>
                        <p>Creative Developer</p>
                    </div>
                    <div className="menu__close" onClick={onCloseAsideMenu}>
                        <i className='bxr bx-x'></i>
                    </div>
                </div>

                <nav className="menu__nav">
                    {menuItems.map(item => (
                        <Link
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
