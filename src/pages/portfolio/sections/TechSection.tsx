import React from 'react'

export const TechSection: React.FC = () => {
  return (
    <section id='tech' className='portfolio-tech'>
      <div className="portfolio-tech__container container">
        <div className="portfolio-tech__content">
          <span className='portfolio-tech__sub'>Technologies</span>
          <h2 className="heading-section portfolio-tech__title">
            <div className="period period--medium"></div>
            Skills and Knowledge
          </h2>
          <p className="portfolio-tech__text">
            Passionate about clean architectures, SOLID principles, and writing maintainable, efficient code. I stay up-to-date with the latest technologies and always strive to build scalable and well-structured software solutions.
          </p>
        </div>
        <div className="portfolio-tech__tech">
          <i title="HTML5" className="devicon-html5-plain-wordmark colored"></i>
          <i title="CSS3" className="devicon-css3-plain-wordmark colored"></i>
          <i title="Javascript" className="devicon-javascript-plain colored"></i>
          <i title="Typescript" className="devicon-typescript-plain colored"></i>
          <i title="SASS" className="devicon-sass-original colored"></i>
          <i title="TailwindCss" className="devicon-tailwindcss-original colored"></i>
          <i title="React" className="devicon-react-original colored"></i>
          <i title="Node" className="devicon-nodejs-plain-wordmark colored"></i>
          <i title='SQL' className="devicon-azuresqldatabase-plain colored"></i>
          <i title="MongoDB" className="devicon-mongodb-plain colored"></i>
          <i title="Prisma" className="devicon-prisma-original"></i>
          <i title="Jest" className="devicon-jest-plain colored"></i>
          <i title="Java" className="devicon-java-plain colored"></i>
          <i title='Firebase' className="devicon-firebase-plain colored"></i>
          <i title="git" className="devicon-git-plain colored"></i>
          <i title="github" className="devicon-github-original colored"></i>
          
        </div>
      </div>
    </section>
  )
}
