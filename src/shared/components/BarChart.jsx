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
import { useEffect, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
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

Chart.defaults.color = '#0891b2'

const backgroundColor = [
    '#fca5a5', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e',
    '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1',
    '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e', '#155e75',
]
const borderColor = [
    '#fca5a588', '#f9731688', '#f59e0b88', '#eab30888', '#84cc1688',
    '#22c55e88', '#10b98188', '#14b8a688', '#06b6d488', '#0ea5e988',
    '#3b82f688', '#6366f188', '#8b5cf688', '#a855f788', '#d946ef88',
    '#ec489988', '#f43f5e88', '#155e7588',
]

export const BarChart = ({ isCalculated, x, y, xLabel = '', yLabel = '' }) => {
    const chartRef = useRef();

    useEffect(() => {
        if (chartRef.current)
            chartRef.current.canvas.style.width = '100%';
    })
    

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Medidas',
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: xLabel,
                },
                beginAtZero: true,
            },
            y: {
                title: {
                    display: true,
                    text: yLabel,
                },
            },
        },
    }

    const data = {
        labels: x,
        datasets: [{
            data: y,
            backgroundColor,
            borderColor,
            borderWidth: 1
        }]
    }

    return (
        <>
            {!isCalculated
                ? <></>
                : <div className="sm:w-full md:w-[500px] lg:w-[700px]">
                    <Bar
                        options={options}
                        data={data}
                        ref={chartRef}         
                    />
                </div>}
        </>
    )
}
