import { createSlice } from '@reduxjs/toolkit';
import { poissonCalc, round } from '../shared';

const initialState = {
    p: 0,
    results: [],
    roundedTo: 2,
    isCalculated: false,
    mu: 0,
    variance: 0
}

export const poissonDistributionSlice = createSlice({
    name: 'poissonDistribution',
    initialState,
    reducers: {
        calculate: (state, action) => {
            const auxResults = [];
            
            for (let i = 0; i <= state.mu; i++) {
                auxResults.push({
                    x: i,
                    value: round(poissonCalc(state.mu, i), state.roundedTo)
                });
            };

            for (let i = state.mu+1; i <= state.mu * 2; i++) {
                console.log('seconf for')
                auxResults.push({
                    x: i,
                    value: round(poissonCalc(state.mu, i), state.roundedTo)
                });
            }

            state.isCalculated = true;
            state.results = auxResults;
        },
        setMuValue: (state, { payload: { value } }) => {
            state.mu = Number(value);
        },
        setRoundedValue: (state, action) => {
            state.roundedTo = Number(action.payload.value);
        }
    },
});

export const {
    calculate,
    setMuValue,
    setRoundedValue
} = poissonDistributionSlice.actions