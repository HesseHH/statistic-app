import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { calculate, reset } from '../../store/frecuency-table/frecuencyTableSlice';
import { Header, SelectType, SelectColumns, SelectRounded, Table, Tooltip } from './';

export const FrecuencyTable = () => {
    const { n, arithmeticMean, arithmeticMeanPw2, variance, deviation } = useSelector(state => state.frecuencyTable);

    const dispatch = useDispatch();

    useEffect(() => {
        window.MathJax && window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
    })

    return (
        <>
            <Header />
            <div className='flex justify-center items-center flex-wrap m-2 rounded-md text-cyan-600'>
                <div className='p-2'>
                    <SelectRounded />
                </div>
                <div className='p-2'>
                    <SelectColumns />
                </div>
                <div className='p-2'>
                    <SelectType />
                </div>
            </div>

            <Table />

            <div className='flex justify-center sm:mt-0 mt-10 mb-2'>
                <Tooltip text='Cantidad total de datos'>
                    <p className='text-cyan-600 bg-slate-900 p-3 m-2 rounded-lg text-lg'>{'\\(n\\)'}: {n}</p>
                </Tooltip>
                <Tooltip text='Media arimética'>
                    <p className='text-cyan-600 bg-slate-900 p-3 m-2 rounded-lg text-lg'>{'\\(\\bar{x}\\)'}: {arithmeticMean}</p>
                </Tooltip>
                <Tooltip text='Cuadrado de la media arimética'>
                    <p className='text-cyan-600 bg-slate-900 p-3 m-2 rounded-lg text-lg'>{'\\(\\bar{x}^2\\)'}: {arithmeticMeanPw2}</p>
                </Tooltip>
                <Tooltip text='Varianza'>
                    <p className='text-cyan-600 bg-slate-900 p-3 m-2 rounded-lg text-lg'>{'\\(\\sigma^2\\)'}: {variance}</p>
                </Tooltip>
                <Tooltip text='Desviación estándar'>
                    <p className='text-cyan-600 bg-slate-900 p-3 m-2 rounded-lg text-lg'>{'\\(\\sigma\\)'}: {deviation}</p>
                </Tooltip>
            </div>

            <span className="opacity-0 -z-50"></span>
            <span className="z-50"></span>

            <div className='flex justify-center'>
                <button
                    className='rounded-full bg-cyan-600 text-lg mr-2 text-slate-950 p-2 w-40 hover:bg-cyan-500'
                    onClick={() => dispatch(calculate())}
                >
                    <div className='flex justify-center items-center'>
                        <img src="/calculate.svg" />
                        <span className='ml-2'>Calcular</span>
                    </div>
                </button>

                <button
                    className='rounded-full bg-cyan-600 text-lg text-slate-950 p-2 w-40 hover:bg-cyan-500'
                    onClick={() => dispatch(reset())}
                >
                    <div className='flex justify-center items-center'>
                        <img src="/refresh.svg" />
                        <span className='ml-2'>Reiniciar</span>
                    </div>
                </button>
            </div>
        </>
    )
}
