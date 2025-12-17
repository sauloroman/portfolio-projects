import { configureStore, type Action, type ThunkAction } from "@reduxjs/toolkit";
import { projectsSlice } from "./projects/project.slice";
import { uiSlice } from "./ui/ui.slice";
import { messageSlice } from "./messages/message.slice";

export const store = configureStore({
  reducer: {
    projects: projectsSlice.reducer,
    ui: uiSlice.reducer,
    messages: messageSlice.reducer
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