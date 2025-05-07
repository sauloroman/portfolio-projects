import React from 'react'

export const TechSection: React.FC = () => {
  return (
    <section className='portfolio-tech'>
      <div className="portfolio-tech__container">
        <div className="portfolio-tech__content">
          <h2 className="heading-section portfolio-tech__title">
            <div className="period period--medium"></div>
            Skills and Knowledge
          </h2>
          <p className="portfolio-tech__text">
            Passionate about clean architectures, SOLID principles, and writing maintainable, efficient code. I stay up-to-date with the latest technologies and always strive to build scalable and well-structured software solutions.
          </p>
        </div>
        <div className="portfolio-tech__tech">
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-sass-original colored"></i>
          <i className="devicon-tailwindcss-original colored"></i>
          <i className="devicon-typescript-plain colored"></i>
          <i className="devicon-react-original colored"></i>
          <i className="devicon-nodejs-plain-wordmark colored"></i>
          <i className="devicon-postgresql-plain colored"></i>
          <i className="devicon-prisma-original colored"></i>
          <i className="devicon-jest-plain colored"></i>
          <i className="devicon-mongodb-plain colored"></i>
        </div>
      </div>
    </section>
  )
}
