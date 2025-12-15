import React from 'react'
import type { Project } from '../../../shared/interfaces/project.interface'

const filters: string[] = ['FrontEnd', 'BackEnd', 'FullStack', 'Desktop', 'All']

interface Props {
    projects: Project[]
    activeFilter: string,
    onApplyFilter: (filter: string) => void
}

export const ProjectsFilter: React.FC<Props> = ({ projects, activeFilter, onApplyFilter }) => {
    return (
        <div className='projects-filter'>
            <div className="projects-filter__container">
                <div><span className="portfolio-projects__sub">{projects.length} projects</span></div>
                <ul className='projects-filter__list'>
                    {
                        filters.map( filter => (
                            <li 
                                onClick={() => onApplyFilter(filter)}
                                className={`
                                    projects-filter__item 
                                    ${filter === activeFilter && 'projects-filter__item--active'}
                                `}>
                                    {filter}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
