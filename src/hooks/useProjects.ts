import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { startGettingProjects } from "../store/projects/project.thunk."
import { setProjectOnPage } from "../store/projects/project.slice"

export const useProjects = () => {

  const dispatch = useDispatch<any>()
  const { projects } = useSelector( (state: RootState) => state.projects )

  const onGetProjects = () => {
    dispatch( startGettingProjects( ) )
  }

  const onSetProjectPage = ( id: string ) => {
    dispatch( setProjectOnPage( id ) )
  }

  return {
    projects,

    onSetProjectPage,
    onGetProjects,
  }

}