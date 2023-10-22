import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    changeFactor: false
}

export const barSlice = createSlice({
    name: 'bar',
    initialState,
    reducers: {
        toggleChangeFactor: (state, action) => {
            state.changeFactor = !state.changeFactor;
        }
    },
});

export const {
    toggleChangeFactor
} = barSlice.actions