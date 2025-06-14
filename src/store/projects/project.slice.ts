import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Project } from "../../shared/interfaces/project.interface";

interface InitialStateProjectSlice {
  isLoading: boolean,
  projects: Project[],
  projectOnPage: Project | null
}

const initialState: InitialStateProjectSlice = {
  isLoading: false,
  projects: [],
  projectOnPage: null
}

export const projectsSlice = createSlice({
  initialState: initialState,
  name: 'projects',
  reducers: {

    setIsLoading: ( state, { payload }: PayloadAction<boolean> ) => {
      state.isLoading = payload
    },

    setProjects: ( state, { payload }: PayloadAction<Project[]> ) => {
      state.projects = payload
    },

    setProjectOnPage: ( state, { payload }: PayloadAction<Project> ) => {
      state.projectOnPage = payload
    }

  }
})

export const {
  setIsLoading,
  setProjects,
  setProjectOnPage,
} = projectsSlice.actions