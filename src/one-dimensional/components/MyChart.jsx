import {
    Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

Chart.register(
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
            text: 'Chart.js bar Chart'
        }
    }
}

export const MyChart = () => {

    const { rows } = useSelector(state => state.frecuencyTable);
    const data = {
        labels: rows.map(row => `${row.value}`),
        datasets: [{
            label: '# of Votes',
            data: rows.map(row => Number(row.frec_abs)),
            backgroundColor: '#155e75',
            borderColor: '#06b6d4',
            borderWidth: 1
        }]
    };

    return (
        <div>
            <Bar options={options} data={data} />
        </div>
    )
}
