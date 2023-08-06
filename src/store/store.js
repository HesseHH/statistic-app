import { configureStore } from '@reduxjs/toolkit';
import { frecuencyTableSlice } from './frecuency-table/frecuencyTableSlice';

export const store = configureStore({
    reducer: {
        frecuencyTable: frecuencyTableSlice.reducer
    }
})

