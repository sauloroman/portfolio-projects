import { TypeAnimation } from 'react-type-animation';
import React from 'react'

export const Title: React.FC = () => {
  return (
    <TypeAnimation
      sequence={[
        'FullStack Developer',
        1000, 
        'Web Developer',
        1000,
        'Software Developer',
        1000,
        'Software Engineer',
        1000
      ]}
      wrapper="span"
      speed={50}
      className='heading-special gradient portfolio-hero__title'
      repeat={Infinity}
    />
  )
}
