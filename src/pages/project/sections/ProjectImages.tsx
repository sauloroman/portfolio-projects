import React from 'react'

interface ProjectImagesProps {
  noMobile?: boolean,
  images: string[],
  url: string,
}

export const ProjectImages: React.FC<ProjectImagesProps> = ({ images, noMobile = false }) => {
  return (
    <section className="container project-images">
        <h2 className="project-images__title">Project Images</h2>
        <ul className={` ${noMobile ? 'project-images__list-no-mobile' : 'project-images__list'}`}>
          {
            images?.map( (image, i) => (
              i >= 2 &&
              <li key={ image } className="project-images__box">
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
