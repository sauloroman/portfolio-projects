import React from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../../../hooks'

export const TechSection: React.FC = () => {

  const { containerVariants, itemVariants, viewport } = useScrollReveal()

  return (
    <motion.section
      id="tech"
      className="portfolio-tech"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={containerVariants}
    >
      <div className="portfolio-tech__container container">

        {/* Content */}
        <motion.div
          className="portfolio-tech__content"
          variants={itemVariants}
        >
          <span className='portfolio-tech__sub'>Technologies</span>
          <h2 className="heading-section portfolio-tech__title">
            <div className="period period--medium"></div>
            Skills and Knowledge
          </h2>
          <p className="portfolio-tech__text">
            Passionate about clean architectures, SOLID principles, and writing maintainable, efficient code. I stay up-to-date with the latest technologies and always strive to build scalable and well-structured software solutions.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          className="portfolio-tech__tech"
          variants={containerVariants}
        >
          {[
            "devicon-html5-plain-wordmark colored",
            "devicon-css3-plain-wordmark colored",
            "devicon-javascript-plain colored",
            "devicon-typescript-plain colored",
            "devicon-sass-original colored",
            "devicon-tailwindcss-original colored",
            "devicon-react-original colored",
            "devicon-redux-original colored",
            "devicon-nodejs-plain-wordmark colored",
            "devicon-postgresql-plain colored",
            "devicon-mysql-plain colored",
            "devicon-mongoose-original colored",
            "devicon-mongodb-plain colored",
            "devicon-prisma-original",
            "devicon-jest-plain colored",
            "devicon-java-plain colored",
            "devicon-firebase-plain colored",
            "devicon-git-plain colored",
            "devicon-github-original",
            "devicon-express-original colored"
          ].map((iconClass, index) => (
            <motion.i
              key={index}
              className={iconClass}
              variants={itemVariants}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </motion.div>

      </div>
    </motion.section>
  )
}
