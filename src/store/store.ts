import { configureStore, type Action, type ThunkAction } from "@reduxjs/toolkit";
import { projectsSlice } from "./projects/project.slice";

export const store = configureStore({
  reducer: {
    projects: projectsSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch  = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>