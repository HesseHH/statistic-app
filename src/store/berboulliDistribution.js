import { createSlice } from '@reduxjs/toolkit';
import { bernoulliCalc, round } from '../shared/utils/maths';

const initialState = {
    p: 0,
    results: [],
    roundedTo: 2,
    isCalculated: false,
    mu: 0,
    variance: 0
}

export const bernoulliDistributionSlice = createSlice({
    name: 'bernoulliDistribution',
    initialState,
    reducers: {
        calculate: (state, action) => {
            state.results = [
                ...state.results,
                {
                    x: 0,
                    value: round(bernoulliCalc(0, state.p), state.roundedTo)
                }
            ];
            state.results = [
                ...state.results,
                {
                    x: 1,
                    value: round(bernoulliCalc(1, state.p), state.roundedTo)
                }
            ];
            state.isCalculated = true;
        },
        setPSuccessValue: (state, { payload: {value} }) => {
            state.p = value;
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
    setRoundedValue
} = bernoulliDistributionSlice.actions