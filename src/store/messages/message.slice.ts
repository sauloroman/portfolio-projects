import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface MessageState {
    isLoading: boolean
}

const initialState: MessageState = {
    isLoading: false
}

export const messageSlice = createSlice({
    name: 'message',
    initialState: initialState,
    reducers: {

        setIsLoading: ( state, {payload}: PayloadAction<boolean>) => {
            state.isLoading = payload
        }

    }
})

export const {
    setIsLoading
} = messageSlice.actions