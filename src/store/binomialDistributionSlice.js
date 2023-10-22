import { createSlice } from '@reduxjs/toolkit';
import { uuid } from '../one-dimensional/utils';
import { factorial, round } from '../shared/utils/maths';

const initialState = {
    p: 0,
    n: 0,
    results: [],
    roundedTo: 2,
    isCalculated: false,
    mu: 0,
    variance: 0
}

export const binomialDistributionSlice = createSlice({
    name: 'binomialDistribution',
    initialState,
    reducers: {
        calculate: (state, action) => {
            const auxResults = []
            for (let i = 0; i <= state.n; i++) {

                if (i === 0) {
                    auxResults.push({
                        x: i,
                        value: round(Math.pow(1-parseFloat(state.p), state.n), state.roundedTo)
                    });
                    continue;
                }
                
                if (i === state.n) {
                    auxResults.push({
                        x: i,
                        value: round(Math.pow(parseFloat(state.p), i), state.roundedTo)
                    });
                    continue;
                }

                auxResults.push({
                    x: i,
                    value: round((factorial(state.n)/(factorial(i)*factorial(state.n-i)))*Math.pow(parseFloat(state.p), i)*Math.pow(1-parseFloat(state.p), state.n-i), state.roundedTo)
                });

            }

            state.isCalculated = true;
            state.results = auxResults;
        },
        setPSuccessValue: (state, { payload: {value} }) => {
            state.p = value;
        },
        setNValue: (state, { payload: {value} }) => {
            state.n = Number(value);
        },
        setRoundedValue: (state, action) => {
            state.roundedTo = Number(action.payload.value);
        },
        reset: (state) => {
        }
    },
});

export const {
    calculate,
    reset,
    setPSuccessValue,
    setNValue,
    setRoundedValue
} = binomialDistributionSlice.actions