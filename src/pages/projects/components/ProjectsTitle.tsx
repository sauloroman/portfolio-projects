import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export const ProjectsTitle: React.FC = () => {
  return (
    <TypeAnimation
      sequence={[
        'My Latest Projects',
        1000, 
        'Professional Work',
        1000
      ]}
      wrapper="span"
      speed={50}
      className='heading-special gradient projects-hero__title'
      repeat={Infinity}
    />
  )
}
