import type { Dispatch } from "@reduxjs/toolkit"
import { setIsLoading, setProjects } from "./project.slice"
import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import type { Project } from "../../shared/interfaces/project.interface"

export const startGettingProjects = () => {
  return async ( dispatch: Dispatch ) => {
    
    dispatch( setIsLoading(true) )

    try {

      const collectionRef = collection( FirebaseDB, `/projects` )
      const docs = await getDocs( collectionRef )
      
      let projects: Project[] = []
      docs.forEach( doc => {

        const data = doc.data()

        projects.push({
          id: doc.id, 
          title: data.title,
          description: data.description,
          descriptionCard: data.descriptionCard,
          githubRepository: data.githubRepository,
          url: data.url,
          categories: data.category,
          images: data.images,
          technologies: data.technologies,
          noMobile: data.noMobile,
          projectNumber: data.projectNumber,
          isMainProject: data.isMainProject
        })
      })

      dispatch(setProjects( projects ))

    } catch (error) {
      console.log(error)
    }

    dispatch( setIsLoading(false ) )
  }
}