import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: 'h-screen -translate-x-0',
    close: 'static w-0 -translate-x-60',
    isOpened: false
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleOpen: (state, action) => {
            state.isOpened = !state.isOpened;
        }
    },
});

export const {
    toggleOpen
} = sidebarSlice.actions