import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Formula, Info, Input, LineChart, SelectRounded, TableDistribution } from '../../shared';
import { calculate, setMuValue, setRoundedValue } from '../../store/poissonDistributionSlice';

const formula = '\\(f(x) = P(X = x) = \\frac{\\mu^x e^{-\\mu}}{x!} \\)';

import '../algo.css'

export const PoissonDistribution = () => {

    const { mu, results, isCalculated, roundedTo } = useSelector(state => state.poissonDistribution);
    const dispatch = useDispatch();

    useEffect(() => {
        window.MathJax && window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
    });

    return (
        <>
            <h2 className='to-slate-950 text text-center rounded-lg text-4xl font-bold text-cyan-600'>
                Distribución de Poisson
            </h2>

            <hr className='border-cyan-500 my-3 border-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />

            {/* Definition */}
            <section className='bg-slate-800 m-4 p-2 rounded-md text-cyan-600'>
                <h2 className='font-bold text-lg'>Definición:</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat in, adipisci, deleniti eaque consectetur asperiores perspiciatis, velit ab porro officiis ullam quis inventore tempore beatae aut iure nesciunt explicabo dolor?</p>
            </section>

            <section className='bg-slate-800 m-4 p-2 rounded-md text-cyan-600'>
                <h2 className='font-bold text-lg'>Fómula:</h2>
                <div>
                    <div><Formula><p>{formula}</p></Formula></div>
                </div>
            </section>

            <section className='sm:grid block grid-rows-1 grid-cols-2 lg:grid-cols-3 test'>
            {/* <section className='grid grid-flow-col-dense auto-cols-max'> */}
                {/* Configuración */}
                <div className=''>
                    <div className='flex justify-center'>
                        <SelectRounded
                            actualRoundedValue={roundedTo}
                            limit={5}
                            dispatchSettingFunction={setRoundedValue}
                            dispatchCalculateFuntion={calculate}
                        />
                    </div>

                    <div>
                        <div className="bg-slate-800 shadow-md rounded-md gray sm:text-left text-center sm:p-4 p-0 m-2 relative">

                            <div className='p-2'>
                                <h2 className='text-xl text-cyan-600'>{'Media o valor esperado de \\(X\\)'}</h2>
                                <div className='text-center'>
                                    <Input
                                        value={mu}
                                        functionDispatch={setMuValue}
                                    />
                                </div>
                            </div>

                            {/* TODO: Implement limits for x */}

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
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabla de distribución */}
                <div>
                    <TableDistribution
                        isCalculated={isCalculated}
                        headers={['\\(x\\)', '\\(f(x)\\)']}
                        values={results}
                    />
                </div>

                {/* Gráfica */}
                <div className='col-span-2 lg:col-span-1 w-full'>
                    <div className='flex justify-center items-center w-full h-full'>
                        <div className='mr-2 w-full'>
                            <LineChart
                                isCalculated={isCalculated}
                                x={results.map(item => item.x)}
                                y={results.map(item => item.value)}
                                yLabel='Probabilidad'
                                xLabel='x'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className='flex justify-center sm:mt-0 mt-10 mb-2'>
                <Info text={'Media o valor esperado de X'} element={'\\(\\mu\\)'} value={mu} />
            </div>
        </>
    )
}
