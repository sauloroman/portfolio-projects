import type { Dispatch } from "@reduxjs/toolkit"
import { setIsLoading, setProjectOnPage, setProjects } from "./project.slice"
import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import type { Project } from "../../shared/interfaces/project.interface"

export const startGettingProjects = () => {
  return async (dispatch: Dispatch) => {

    dispatch(setIsLoading(true))

    try {

      const collectionRef = collection(FirebaseDB, `/projects`)
      const docs = await getDocs(collectionRef)

      let projects: Project[] = []
      docs.forEach(doc => {

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

      dispatch(setProjects(projects))

    } catch (error) {
      console.log(error)
    } finally {
      dispatch(setIsLoading(false))
    }

  }
}

export const startGettingProjectById = (projectId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(setIsLoading(true))

    try {
      const docRef = doc(FirebaseDB, 'projects', projectId)
      const snapshot = await getDoc(docRef)

      if (!snapshot.exists()) {
        throw new Error('Project not found')
      }

      const data = snapshot.data()

      const project: Project = {
        id: snapshot.id,
        title: data.title,
        description: data.description,
        descriptionCard: data.descriptionCard,
        githubRepository: data.githubRepository,
        url: data.url,
        categories: data.categories,
        images: data.images ?? [],
        technologies: data.technologies ?? [],
        noMobile: Boolean(data.noMobile),
        projectNumber: Number(data.projectNumber),
        isMainProject: Boolean(data.isMainProject)
      }

      dispatch(setProjectOnPage(project))
    } catch (error) {
      console.error('Error getting project by id:', error)
    } finally {
      dispatch(setIsLoading(false))
    }
  }
}
