import React from 'react'
import { filters } from '../../../shared/interfaces/ui.interface'

interface Props {
    activeFilter: string,
    onApplyFilter: (filter: string) => void
}

export const ProjectsFilterSelect: React.FC<Props> = ({ activeFilter, onApplyFilter }) => {
  
    const onSelectFilter = ( e: React.ChangeEvent<HTMLSelectElement> ) => {
        onApplyFilter(e.target.value)
    }

    return (
        <select value={activeFilter} onChange={onSelectFilter} className='projects-filter-select'>
            {
                filters.map( filter => (
                    <option 
                        key={filter}
                        className='projects-filter-select__option' 
                        value={filter}
                    >{filter}
                    </option>
                ))
            }
        </select>
    )
}
