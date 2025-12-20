import React from 'react'
import { getParagraphsFromTxt } from '../../../shared/helpers/get-paragraphs'

interface ProjectContentProps {
  video: string,
  title: string,
  description: string,
}

export const ProjectContent: React.FC<ProjectContentProps> = ({ description, video, title }) => {
  
  const descriptionInParagraphs = getParagraphsFromTxt( description )

  return (
    <section className='project-content'>
      <div className='project-content__imgBox'>
        <video 
          loop={true}
          controls={true}
          className='project-content__img' 
          src={video}
        ></video>
      </div>
      <div className="project-content__text">
        <div className='project-content__top'>
          <div className="period period--medium"></div>
          <h2 className="project-content__subtitle">{title}</h2>
          <div className="period period--medium"></div>
        </div>
        <div>
          {
            descriptionInParagraphs.map( para => (
              <>                
                <p>{para}</p> 
                <br />
              </>
            ))
          }
        </div>
      </div>
    </section>
  )
}
