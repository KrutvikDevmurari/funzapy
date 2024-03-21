import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IAuthState {
    howToPlay: any[];
}

const initialState: IAuthState = {
    howToPlay: [],
};

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setquizState: (state, action: PayloadAction<any>) => {
            state.howToPlay = action.payload;
        },
    },
});

export const { setquizState } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;