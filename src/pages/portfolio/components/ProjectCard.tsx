import React from 'react'
import cardImage from '../../../assets/img/image-card.png'

interface ProjectCardProps {
  left?: boolean
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ left }) => {
  return (
    <div className='project-card'>
      {
        left
        ? (
          <>
            <div className="project-card__figure">
            <img 
              className='project-card__image'
              src={cardImage}
              alt="Card Image Poken" 
              />
            </div>
            <div className="project-card__content">
              <h4 className='project-card__title'>PokemonApp</h4>
              <p className="project-card__text">A sleek and responsive web application that allows users to explore detailed information about Pokémon using data fetched from the public PokéAPI.</p>

              <ul className="project-card__tech">
                <li className="project-card__item">
                  <i className="devicon-react-original colored"></i>
                  React
                </li>
                <li className="project-card__item">
                  <i className="devicon-typescript-original colored"></i>
                  Typescript
                </li>
                <li className="project-card__item">
                  <i className="devicon-html5-plain-wordmark colored"></i>
                  HTML5
                </li>
                <li className="project-card__item">
                  <i className="devicon-css3-plain-wordmark colored"></i>
                  CSS3
                </li>
                <li className="project-card__item">
                  <i className="devicon-javascript-plain colored"></i>
                  Javascript
                </li>
                <li className="project-card__item">
                  <img src="https://images.seeklogo.com/logo-png/43/1/react-query-logo-png_seeklogo-435661.png" alt="TanstackQuery" />
                  TanStack Query
                </li>
              </ul>

              <div className="project-card__buttons">
                <button className="btn btn--purple project-card__button">
                  <div className="period period--small period--green u-mr-1"></div>
                  Online
                </button>
                <button className="btn btn--outline project-card__button">
                  <i className='bx bx-search-alt-2 btn__icon'></i>
                  More
                </button>
              </div>
            </div>
          </>
        )
        : (
          <>
            <div className="project-card__content">
              <h4 className='project-card__title'>PokemonApp</h4>
            </div>
            <div className="project-card__figure">
              <img 
                className='project-card__image'
                src={cardImage}
                alt="Card Image Poken" 
                />
            </div>
          </>
        )
      }
     
    </div>
  )
}
