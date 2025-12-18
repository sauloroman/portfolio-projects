import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { startGettingProjectById, startGettingProjects } from "../store/projects/project.thunk."
import { setProjectOnPage } from "../store/projects/project.slice"
import type { Project } from "../shared/interfaces/project.interface"

export const useProjects = () => {

  const dispatch = useDispatch<any>()
  const { projects, projectOnPage, isLoading } = useSelector( (state: RootState) => state.projects )

  const onGetProjects = () => {
    dispatch( startGettingProjects() )
  }

  const onSetProjectPage = ( project: Project ) => {
    dispatch( setProjectOnPage( project ) )
  }

  const onGetProjectById = ( id: string ) => {
    dispatch( startGettingProjectById(id) )
  }

  return {
    projects,
    projectOnPage,
    isLoading,

    onSetProjectPage,
    onGetProjects,
    onGetProjectById
  }

}