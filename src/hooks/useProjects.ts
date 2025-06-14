import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { startGettingProjects } from "../store/projects/project.thunk."
import { setProjectOnPage } from "../store/projects/project.slice"
import type { Project } from "../shared/interfaces/project.interface"

export const useProjects = () => {

  const dispatch = useDispatch<any>()
  const { projects, projectOnPage } = useSelector( (state: RootState) => state.projects )

  const onGetProjects = () => {
    dispatch( startGettingProjects( ) )
  }

  const onSetProjectPage = ( project: Project ) => {
    dispatch( setProjectOnPage( project ) )
  }

  return {
    projects,
    projectOnPage,

    onSetProjectPage,
    onGetProjects
  }

}