import { columns, columnsCalc } from "../data";

export const calc = (n, x, rows, arithmeticMean, roundedTo) => {
    const newRow = { ...x };
    Object.keys(x).forEach(key => {
        const col = columnsCalc.find(col => col['id'] == key);
        if (!col) return;
        const val = col.calc(n, newRow, roundedTo, rows, arithmeticMean);
        newRow[key] = val;
    });

    return newRow;
}