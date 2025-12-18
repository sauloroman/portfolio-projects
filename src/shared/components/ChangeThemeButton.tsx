import React from 'react'
import { useUI } from '../../hooks'

export const ChangeThemeButton: React.FC = () => {
    const { isDarkMode, onActiveDarkMode, onActiveLightMode } = useUI()

    const onToggleTheme = () => {
        if ( isDarkMode ) {
            onActiveLightMode()
            return;
        }

        onActiveDarkMode()
    }

    return (
        <button onClick={onToggleTheme} className='btn btn--theme'>
            {
                isDarkMode
                ? ( <i className='bxr bx-sun'></i> ) 
                : (<i className='bxr bx-moon'></i> )
            } 
        </button>
    )
}
