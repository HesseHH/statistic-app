import { configureStore } from '@reduxjs/toolkit';
import { 
    bernoulliDistributionSlice,
    binomialDistributionSlice,
    frecuencyTableSlice,
    poissonDistributionSlice
} from './';
// import { binomialDistributionSlice } from './binomialDistributionSlice';
// import { bernoulliDistributionSlice } from './berboulliDistributionSlice';
// import { poissonDistributionSlice } from './poissonDistributionSlice';

export const store = configureStore({
    reducer: {
        frecuencyTable: frecuencyTableSlice.reducer,
        binomialDistribution: binomialDistributionSlice.reducer,
        bernoulliDistribution: bernoulliDistributionSlice.reducer,
        poissonDistribution: poissonDistributionSlice.reducer
    }
})

