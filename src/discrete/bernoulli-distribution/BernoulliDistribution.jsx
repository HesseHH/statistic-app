import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Formula, Info, Input, TableDistribution } from '../../shared';
import { calculate, setPSuccessValue } from '../../store/bernoulliDistributionSlice';

const formula = '\\(f(x) = P(X = x) = p^x (1-p)^{1-x} \\)';
const formula2 = '\\(f(x) = P(X = x) = \\begin{cases} 1-p & \\text{si } x=0 \\\\p & \\text{si } x=1 \\\\0 & \\text{en otro caso} \\end{cases} \\)';
const x = '\\(X\\)'

export const BernoulliDistribution = () => {
    const { p, isCalculated, results, roundedTo } = useSelector(state => state.bernoulliDistribution);
    const dispatch = useDispatch();

    useEffect(() => {
        window.MathJax && window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
    });

    return (
        <>

            <h2 className='to-slate-950 text text-center rounded-lg text-4xl font-bold text-cyan-600'>
                Distribución de Berboulli
            </h2>

            <hr className='border-cyan-500 my-3 border-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />

            {/* Definition */}
            <section className='m-4 p-2 rounded-md text-cyan-600'>
                <h2 className='font-bold text-lg'>Definición:</h2>
                <p>
                    La variable aleatoria {'\\(X\\)'} posee una distribución de Bernoulli con parámetro&nbsp;
                    {'\\(p\\)'} si solo puede tomar dos valores 0 o 1 (fracaso o éxito), con probabilidad positiva.
                    Su función de probabilidad está dada por:
                </p>
                <Formula><p className='sm:text-xl text-lg'>{formula2}</p></Formula>
                <p>Otra función de probabilidad equivalente está dada por:</p>
                <Formula><p className='sm:text-xl text-lg'>{formula}</p></Formula>
                <p>
                    Se escribe {'\\(X \\sim B(p)\\)'} o {'\\(X \\stackrel{d}{=} B(p)\\)'}&nbsp;
                    para indicar que la variable {'\\(X\\)'} tiene una distribución de Bernoulli de parámetro&nbsp;
                    {'\\(p\\)'}.
                </p>
            </section>

            {/* <section className='bg-slate-800 m-4 p-2 rounded-md text-cyan-600'>
                <h2 className='font-bold text-lg'>Fómula:</h2>
                <div>
                    <div><Formula><p className='sm:text-3xl text-sm'>{formula}</p></Formula></div>
                </div>
                <p className='text-cyan-600 text-center sm:text-2xl text-xl'>o</p>
                <div>
                    <div><Formula><p className='sm:text-3xl text-sm'>{formula2}</p></Formula></div>
                </div>
            </section> */}

            <section className='sm:grid block grid-rows-1 grid-cols-2 lg:grid-cols-2'>
                <div>
                    <div className="bg-slate-800 shadow-md rounded-md gray sm:text-left text-center sm:p-4 p-0 m-2 relative">

                        <div className='p-2'>
                            <h2 className='text-xl text-cyan-600'>Probabilidad de éxito</h2>
                            <div className='text-center'>
                                <Input
                                    value={p}
                                    functionDispatch={setPSuccessValue}
                                />
                            </div>
                        </div>

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

                <TableDistribution
                    isCalculated={isCalculated}
                    headers={['\\(x\\)', '\\(f(x)\\)']}
                    values={results}
                />
            </section>

            <div className='flex justify-center sm:mt-0 mt-10 mb-2'>
                <Info text={'Probabilidad de éxito'} element={'\\(p\\)'} value={p} />
            </div>
        </>
    )
}
