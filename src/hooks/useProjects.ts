import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { startGettingProjects } from "../store/projects/project.thunk."

export const useProjects = () => {

  const dispatch = useDispatch<any>()
  const { projects } = useSelector( (state: RootState) => state.projects )

  const onGetProjects = () => {
    dispatch( startGettingProjects( ) )
  }

  return {
    projects,

    onGetProjects,
  }

}