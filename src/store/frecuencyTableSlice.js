import { createSlice } from '@reduxjs/toolkit';
import { columns, columnsByFormula } from '../one-dimensional/data';
import { calc, uuid } from '../one-dimensional/utils';
import { round } from '../shared';

const initialState = {
    groupedData: false,
    columns: [...columnsByFormula.formula1.cols],
    rows: [
        {
            id: uuid(),
            value: 2
        },
        {
            id: uuid(),
            value: 4
        },
        {
            id: uuid(),
            value: 6
        }
    ],
    formula: columnsByFormula.formula1.id,
    n: 0,
    arithmeticMean: 0,
    arithmeticMeanPw2: 0,
    variance: 0,
    deviation: 0,
    roundedTo: 2,
    calculated: false
}

columns.forEach(col => initialState.rows.forEach(row => row[col.id] = 0));
initialState.rows.forEach(row => row['frec_abs'] = 1);

const initialRowsGroupedData = [
    {
        id: uuid(),
        upperLimit: 10,
        lowerLimit: 20
    },
    {
        id: uuid(),
        upperLimit: 20,
        lowerLimit: 30
    },
    {
        id: uuid(),
        upperLimit: 30,
        lowerLimit: 40
    }
];

const initialRowsNonGroupedData = [
    {
        id: uuid(),
        value: 2
    },
    {
        id: uuid(),
        value: 4
    },
    {
        id: uuid(),
        value: 6
    }
];

export const frecuencyTableSlice = createSlice({
    name: 'frecuencyTable',
    initialState,
    reducers: {
        addColumn: (state, action) => {

        },
        addRow: (state, action) => {
            if (state.groupedData) {
                const rowToAdd = { id: uuid(), upperLimit: 0, lowerLimit: 0, frec_abs: 1 };
                columns.forEach(col => rowToAdd[col.id] = 0);
                rowToAdd['frec_abs'] = 1;
                state.rows.push(rowToAdd);
            } else {
                const rowToAdd = { id: uuid(), value: 0, frec_abs: 1 }
                columns.forEach(col => rowToAdd[col.id] = 0);
                rowToAdd['frec_abs'] = 1;
                state.rows.push(rowToAdd);
            }
        },
        removeRow: (state, action) => {
            state.rows = state.rows.filter(row => row.id != action.payload.id);
        },
        setOrderColumns: (state, action) => {

        },
        setOrderRows: (state, action) => {

        },
        setColumns: (state, action) => {
            state.columns = columnsByFormula[action.payload.formula].cols;
            state.formula = columnsByFormula[action.payload.formula].id;
        },
        calculate: (state, action) => {
            // Calculation of the total number of elements
            let n = 0;
            state.rows.forEach(row => n += Number(row.frec_abs));
            state.n = n;

            // Calculation of arithmetic mean
            let sumX = 0;
            if (state.groupedData) state.rows.forEach(row => sumX += (Number(row.upperLimit) + Number(row.lowerLimit))/2 * row.frec_abs);
            else state.rows.forEach(row => sumX += row.value * row.frec_abs);
            state.arithmeticMean = round(sumX / state.n, state.roundedTo);
            state.arithmeticMeanPw2 = round(Math.pow(state.arithmeticMean, 2), state.roundedTo);

            // Calculation of all values ​​of the FT for each variable x
            const rows = [];
            state.rows.forEach(row => {
                const newRow = calc(state.n, row, state.rows, state.arithmeticMean, state.roundedTo);
                rows.push(newRow);
            });
            state.rows = rows;

            // Calculation of the variance. The sum of the squares of the values of x multiplied by the absolute frequency
            state.variance = round(columnsByFormula[state.formula].calc(state.n, state.rows, state.arithmeticMeanPw2), state.roundedTo);
            state.deviation = round(Math.sqrt(state.variance), state.roundedTo);

            state.calculated = true;
        },
        setXValue: (state, action) => {
            if (state.groupedData) {
                const index = state.rows.findIndex(row => row.id == action.payload.id);
                if (action.payload.upperLimit) state.rows[index]['upperLimit'] = action.payload.value;
                if (action.payload.lowerLimit) state.rows[index]['lowerLimit'] = action.payload.value;
            } else {
                const index = state.rows.findIndex(row => row.id == action.payload.id);
                state.rows[index]['value'] = action.payload.value;
            }
        },
        setFrecAbs: (state, action) => {
            const index = state.rows.findIndex(row => row.id == action.payload.id);
            state.rows[index]['frec_abs'] = action.payload.value;
        },
        setRoundedValue: (state, action) => {
            state.roundedTo = Number(action.payload.value);
        },
        reset: (state) => {
            if (state.groupedData) {
                state.columns = [...columnsByFormula.formula3.cols];
                const rows = initialRowsGroupedData.map(row => ({...row}));
                columns.forEach(col => rows.forEach(row => row[col.id] = 0));
                rows.forEach(row => row['frec_abs'] = 1);
                state.rows = rows;
                state.n =  0;
                state.arithmeticMean =  0;
                state.arithmeticMeanPw2 =  0;
                state.variance =  0;
                state.deviation =  0;
                state.calculated = false;
            }else {
                state.columns = [...columnsByFormula.formula1.cols];
                const rows = initialRowsNonGroupedData.map(row => ({...row}));
                columns.forEach(col => rows.forEach(row => row[col.id] = 0));
                rows.forEach(row => row['frec_abs'] = 1);
                state.rows = rows;
                state.n = 0;
                state.arithmeticMean = 0;
                state.arithmeticMeanPw2 = 0;
                state.variance = 0;
                state.deviation = 0;
                state.calculated = false;
            }
        },
        toggleGroupedDataValue: (state) => {
            state.groupedData = !state.groupedData;
            if (state.groupedData) {
                state.columns = [...columnsByFormula.formula3.cols];
                state.formula = columnsByFormula.formula3.id;
                const rows = initialRowsGroupedData.map(row => ({...row}));
                columns.forEach(col => rows.forEach(row => row[col.id] = 0));
                rows.forEach(row => row['frec_abs'] = 1);
                state.rows = rows;
                state.n =  0;
                state.arithmeticMean =  0;
                state.arithmeticMeanPw2 =  0;
                state.variance =  0;
                state.deviation =  0;
                state.calculated = false
            }else {
                state.columns = [...columnsByFormula.formula1.cols];
                state.formula = columnsByFormula.formula1.id;
                const rows = initialRowsNonGroupedData.map(row => ({...row}));
                columns.forEach(col => rows.forEach(row => row[col.id] = 0));
                rows.forEach(row => row['frec_abs'] = 1);
                state.rows = rows;
                state.n = 0;
                state.arithmeticMean = 0;
                state.arithmeticMeanPw2 = 0;
                state.variance = 0;
                state.deviation = 0;
                state.calculated = false
            }
        }
    },
});

export const {
    addColumn,
    addRow,
    removeRow,
    setOrderColumns,
    setOrderRows,
    setColumns,
    calculate,
    setXValue,
    setFrecAbs,
    setRoundedValue,
    reset,
    toggleGroupedDataValue
} = frecuencyTableSlice.actions;