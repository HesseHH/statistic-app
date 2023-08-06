import {
    Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";

Chart.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Medidas'
        }
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Variables',
            },
            beginAtZero: true,
        },
        y: {
            title: {
                display: true,
                text: 'Frecuencia',
            },

        },
    },
}


export const Charts = () => {

    const { rows, calculated, groupedData } = useSelector(state => state.frecuencyTable);

    const data = {
        labels: [],
        datasets: [{
            label: '',
            data: [],
            backgroundColor: [
                '#fca5a5',
                '#f97316',
                '#f59e0b',
                '#eab308',
                '#84cc16',
                '#22c55e',
                '#10b981',
                '#14b8a6',
                '#06b6d4',
                '#0ea5e9',
                '#3b82f6',
                '#6366f1',
                '#8b5cf6',
                '#a855f7',
                '#d946ef',
                '#ec4899',
                '#f43f5e',
                '#155e75',
            ],
            borderColor: [
                '#fca5a588',
                '#f9731688',
                '#f59e0b88',
                '#eab30888',
                '#84cc1688',
                '#22c55e88',
                '#10b98188',
                '#14b8a688',
                '#06b6d488',
                '#0ea5e988',
                '#3b82f688',
                '#6366f188',
                '#8b5cf688',
                '#a855f788',
                '#d946ef88',
                '#ec489988',
                '#f43f5e88',
                '#155e7588',
            ],
            borderWidth: 1
        }]
    };

    return (
        <div>
            {calculated
                ? groupedData
                    ? <>
                        <Bar
                            options={{
                                ...options,
                                scales: {
                                    ...options.scales,
                                    x: {
                                        title: {
                                            display: true,
                                            text: 'Intervalos'
                                        }
                                    }
                                }
                            }}
                            data={{
                                ...data,
                                labels: rows.map(row => `${row.upperLimit}-${row.lowerLimit}`),
                                datasets: [{
                                    ...data.datasets[0],
                                    label: 'algo',
                                    data: rows.map(row => Number(row.frec_abs))
                                }]
                            }} />

                        <Pie options={{ ...options, scales: {} }} data={{
                            ...data,
                            labels: rows.map(row => `Marca de clase: ${row.class_mark}`),
                            datasets: [{
                                ...data.datasets[0],
                                label: 'Proporción de marcas de clase',
                                data: rows.map(row => Number(row.frec_abs))
                            }],

                        }} />
                    </>
                    : <>
                        <Bar options={options} data={{
                            ...data,
                            labels: rows.map(row => `Variable: ${row.value}`),
                            datasets: [{
                                ...data.datasets[0],
                                label: 'Distribución de frecuencias',
                                data: rows.map(row => Number(row.frec_abs)),
                                backgroundColor: '#f97316',
                                borderColor: '#f9731688'
                            }],

                        }} />

                        <Pie options={{ ...options, scales: {} }} data={{
                            ...data,
                            labels: rows.map(row => `Variable: ${row.value}`),
                            datasets: [{
                                ...data.datasets[0],
                                label: 'Proporción de frecuencias',
                                data: rows.map(row => Number(row.frec_abs))
                            }],

                        }} />
                    </>
                : <h1>Realiza un cálculo para mostrar gráficos</h1>}
        </div>
    )
}
