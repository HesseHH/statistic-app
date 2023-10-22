import { createSlice } from '@reduxjs/toolkit';
import { bernoulliCalc } from '../shared/utils/maths';

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
        },
        setPSuccessValue: (state, { payload: {value} }) => {
            state.p = value;
        },
        setRoundedValue: (state, action) => {
            state.roundedTo = Number(action.payload.value);
        }
    },
});

export const {
    calculate,
    setPSuccessValue,
    setRoundedValue
} = bernoulliDistributionSlice.actions