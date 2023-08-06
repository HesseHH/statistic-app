import { round } from "./mathematics";

export const columns = [
    {
        id: 'frec_abs',
        name: 'Frecuencia absoluta',
        abbreviation: '\\(f\\)'
    },
    {
        id: 'frec_rel',
        name: 'Frecuencia Relativa',
        abbreviation: '\\(f_r\\)'
    },
    {
        id: 'frec_rel_por',
        name: 'Frecuencia Relativa Porcentual',
        abbreviation: '\\(f_r\\%\\)'
    },
    {
        id: 'frec_rel_acu',
        name: 'Frecuencia Relativa Acumulada',
        abbreviation: '\\(F_r\\)'
    },
    {
        id: 'frec_rel_acu_por',
        name: 'Frecuencia Relativa Acumulada Porcentual',
        abbreviation: '\\(F_r\\%\\)'
    },
    {
        id: 'x_multiply_fa',
        name: 'Producto entre la frecuencia absoluta y la variable x',
        abbreviation: '\\(f \\cdot x\\)'
    },
    {
        id: 'x_substraction_prom',
        name: 'Variable menos media arimética',
        abbreviation: '\\(x - \\bar{x}\\)'
    },
    {
        id: 'x_subs_prom_power_2',
        name: 'Cuadrado de la diferencia entre la variable y la media arimética',
        abbreviation: '\\((x - \\bar{x})^2\\)'
    },
    {
        id: 'f_multiply_x_subs_prom_power_2',
        name: 'Producto entre la frecuencia y el cuadrado de la diferencia entre la variable y la media arimética',
        abbreviation: '\\(f \\cdot (x - \\bar{x})^2\\)'
    },
    {
        id: 'f_x_power_2',
        name: 'Producto entre la frecuencia y el cuadrado de la variable',
        abbreviation: '\\(f \\cdot x^2\\)'
    },
    {
        id: 'x_power_2',
        name: 'Cuadrado de la variable',
        abbreviation: '\\(x^2\\)'
    },
    {
        id: 'class_mark',
        name: 'Marca de clase (Límite superior más Límite inferior dividido en 2)',
        abbreviation: '\\(x\\)'
    },
    {
        id: 'm_multiply_fa',
        name: 'Producto entre la frecuencia absoluta y la marca de clase',
        abbreviation: '\\(f \\cdot x\\)'
    },
    {
        id: 'm_substraction_prom',
        name: 'Marca de clase menos media arimética',
        abbreviation: '\\(x - \\bar{x}\\)'
    },
    {
        id: 'm_subs_prom_power_2',
        name: 'Cuadrado de la diferencia entre la marca de clase y la media arimética',
        abbreviation: '\\((x - \\bar{x})^2\\)'
    },
    {
        id: 'f_multiply_m_subs_prom_power_2',
        name: 'Producto entre la frecuencia y el cuadrado de la diferencia entre la marca de clase y la media arimética',
        abbreviation: '\\(f \\cdot (x - \\bar{x})^2\\)'
    },
    {
        id: 'f_m_power_2',
        name: 'Producto entre la frecuencia y el cuadrado de la marca de clase',
        abbreviation: '\\(f \\cdot x^2\\)'
    },
    {
        id: 'm_power_2',
        name: 'Cuadrado de la marca de clase',
        abbreviation: '\\(x^2\\)'
    }
]

export const columnsCalc = [
    {
        id: 'frec_abs',
        calc: (n, objectX) => objectX.frec_abs
    },
    {
        id: 'frec_rel',
        calc: (n, objectX, roundedTo) => round(objectX.frec_abs / n, roundedTo)
    },
    {
        id: 'frec_rel_por',
        calc: (n, objectX, roundedTo) => round(objectX.frec_rel * 100, roundedTo)
    },
    {
        id: 'frec_rel_acu',
        calc: (n, objectX, roundedTo, rows) => {
            const index = rows.findIndex(({ id }) => id == objectX.id);
            let acumm = 0;
            for (let i = index; i >= 0; i--) {
                acumm += rows[i].frec_abs / n;
            }
            return acumm;
        }
    },
    {
        id: 'frec_rel_acu_por',
        calc: (n, objectX) => objectX.frec_rel_acu * 100
    },
    {
        id: 'x_multiply_fa',
        calc: (n, objectX) => objectX.value * objectX.frec_abs
    },
    {
        id: 'x_substraction_prom',
        calc: (n, objectX, roundedTo, rows, arithmeticMean) => objectX.value - arithmeticMean
    },
    {
        id: 'x_subs_prom_power_2',
        calc: (n, objectX) => Math.pow(objectX.x_substraction_prom, 2)
    },
    {
        id: 'f_multiply_x_subs_prom_power_2',
        calc: (n, objectX) => objectX.frec_abs * objectX.x_subs_prom_power_2
    },
    {
        id: 'f_x_power_2',
        calc: (n, objectX) => objectX.frec_abs * (Math.pow(objectX.value, 2))
    },
    {
        id: 'x_power_2',
        calc: (n, objectX) => Math.pow(objectX.value, 2)
    },
    {
        id: 'class_mark',
        calc: (n, objectX) => (Number(objectX.upperLimit) + Number(objectX.lowerLimit)) / 2
    },
    {
        id: 'm_multiply_fa',
        calc: (n, objectX) => objectX.class_mark * objectX.frec_abs
    },
    {
        id: 'm_substraction_prom',
        calc: (n, objectX, roundedTo, rows, arithmeticMean) => round(objectX.class_mark - arithmeticMean, roundedTo)
    },
    {
        id: 'm_subs_prom_power_2',
        calc: (n, objectX, roundedTo) => round(Math.pow(objectX.m_substraction_prom, 2), roundedTo)
    },
    {
        id: 'f_multiply_m_subs_prom_power_2',
        calc: (n, objectX, roundedTo) => round(objectX.frec_abs * objectX.m_subs_prom_power_2, roundedTo)
    },
    {
        id: 'f_m_power_2',
        calc: (n, objectX, roundedTo) => round(objectX.frec_abs * (Math.pow(objectX.class_mark, 2)), roundedTo)
    },
    {
        id: 'm_power_2',
        calc: (n, objectX, roundedTo) => round(Math.pow(objectX.class_mark, 2), roundedTo)
    }
]

export const columnsByFormula = {
    formula1: {
        id: 'formula1',
        cols: [
            columns.find(({ id }) => id == 'frec_rel'),
            columns.find(({ id }) => id == 'frec_rel_por'),
            columns.find(({ id }) => id == 'x_multiply_fa'),
            columns.find(({ id }) => id == 'x_power_2'),
            columns.find(({ id }) => id == 'f_x_power_2'),
        ],
        calc: (n, rows, arithmeticMeanPw2) => {
            let sum = 0;
            rows.forEach(row => sum += Number(row.f_x_power_2));
            return (sum / n) - arithmeticMeanPw2;
        }
    },
    formula2: {
        id: 'formula2',
        cols: [
            columns.find(({ id }) => id == 'frec_rel'),
            columns.find(({ id }) => id == 'frec_rel_por'),
            columns.find(({ id }) => id == 'x_substraction_prom'),
            columns.find(({ id }) => id == 'x_subs_prom_power_2'),
            columns.find(({ id }) => id == 'f_multiply_x_subs_prom_power_2'),
        ],
        calc: (n, rows, arithmeticMeanPw2) => {
            let sum = 0;
            rows.forEach(row => sum += Number(row.f_multiply_x_subs_prom_power_2));
            return sum / n;
        }
    },
    formula3: {
        id: 'formula3',
        cols: [
            columns.find(({ id }) => id == 'class_mark'),
            columns.find(({ id }) => id == 'frec_rel'),
            columns.find(({ id }) => id == 'frec_rel_por'),
            columns.find(({ id }) => id == 'm_multiply_fa'),
            columns.find(({ id }) => id == 'm_power_2'),
            columns.find(({ id }) => id == 'f_m_power_2'),
        ],
        calc: (n, rows, arithmeticMeanPw2) => {
            let sum = 0;
            rows.forEach(row => sum += Number(row.f_m_power_2));
            return (sum / n) - arithmeticMeanPw2;
        }
    },
    formula4: {
        id: 'formula4',
        cols: [
            columns.find(({ id }) => id == 'class_mark'),
            columns.find(({ id }) => id == 'frec_rel'),
            columns.find(({ id }) => id == 'frec_rel_por'),
            columns.find(({ id }) => id == 'm_substraction_prom'),
            columns.find(({ id }) => id == 'm_subs_prom_power_2'),
            columns.find(({ id }) => id == 'f_multiply_m_subs_prom_power_2'),
        ],
        calc: (n, rows, arithmeticMeanPw2) => {
            let sum = 0;
            rows.forEach(row => sum += Number(row.f_multiply_m_subs_prom_power_2));
            return sum / n;
        }
    }
}