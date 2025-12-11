import React from 'react'
import { TbWorld } from "react-icons/tb";
import { FaImage } from "react-icons/fa";

interface ProjectImagesProps {
  noMobile?: boolean,
  images: string[],
  url: string,
}

export const ProjectImages: React.FC<ProjectImagesProps> = ({ images, url, noMobile = false }) => {
  return (
    <section className="container project-images">
        <h2 className="project-images__title">Project Images</h2>
        <ul className={` ${noMobile ? 'project-images__list-no-mobile' : 'project-images__list'}`}>
          {
            images?.map( (image, i) => (
              i >= 2 &&
              <li key={ image } className="project-images__box">
                <div className="project-images__overlay">
                  <div className="project-images__overlay-content">
                    <a target='_blank' href={url} className='btn btn--purple'>
                      <TbWorld className='btn__icon' /> 
                      View Site
                    </a>
                    <a href={url} className='btn btn--outline'>
                      <FaImage className='btn__icon' /> 
                      View image
                    </a>
                  </div>
                </div>
                <img 
                  loading='lazy'
                  className='project-images__img' 
                  src={ image } 
                  alt="Projectt image cellphone" 
                />
              </li>
            ))
          }
        </ul>
      </section>
  )
}
