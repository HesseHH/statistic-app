import { configureStore } from '@reduxjs/toolkit';
import { 
    bernoulliDistributionSlice,
    binomialDistributionSlice,
    frecuencyTableSlice,
    poissonDistributionSlice,
    sidebarSlice
} from './';

export const store = configureStore({
    reducer: {
        frecuencyTable: frecuencyTableSlice.reducer,
        binomialDistribution: binomialDistributionSlice.reducer,
        bernoulliDistribution: bernoulliDistributionSlice.reducer,
        poissonDistribution: poissonDistributionSlice.reducer,
        sidebar: sidebarSlice.reducer
    }
})

