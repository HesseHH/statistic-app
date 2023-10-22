import { configureStore } from '@reduxjs/toolkit';
import { frecuencyTableSlice } from './frecuency-table/frecuencyTableSlice';
import { binomialDistributionSlice } from './binomialDistributionSlice';
import { barSlice } from './barSlice';
import { bernoulliDistributionSlice } from './berboulliDistribution';

export const store = configureStore({
    reducer: {
        frecuencyTable: frecuencyTableSlice.reducer,
        binomialDistribution: binomialDistributionSlice.reducer,
        bernoulliDistribution: bernoulliDistributionSlice.reducer,
        bar: barSlice.reducer
    }
})

