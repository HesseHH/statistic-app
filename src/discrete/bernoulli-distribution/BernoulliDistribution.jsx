import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Formula, Info, Input, TableDistribution } from '../../shared';
import { calculate, setPSuccessValue } from '../../store/berboulliDistributionSlice';

const formula = '\\(f(x) = P(X = x) = p^x (1-p)^{1-x} \\)';
const formula2 = '\\(f(x) = P(X = x) = \\begin{cases} 1-p & \\text{si } x=0 \\\\p & \\text{si } x=1 \\end{cases} \\)';
// const formula = '\\(f(x) = P(X = x) = \\frac{n!}{x!(n-x)!} \\cdot p^x(1-p)^{n-x}\\)';
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

            <div>
                <Formula>
                    <p className='text-xl'>Una variable discreta {x}, sigue una distribución de Bernoulli, si su función está dada por:</p>
                </Formula>
                <p className='text-cyan-600'>
                </p>
            </div>

            <div>
                <div><Formula><p className='sm:text-3xl text-sm'>{formula}</p></Formula></div>
            </div>
            <p className='text-cyan-600 text-center sm:text-2xl text-xl'>o</p>
            <div>
                <div><Formula><p className='sm:text-3xl text-sm'>{formula2}</p></Formula></div>
            </div>

            <div className='sm:flex block justify-center'>

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
            </div>

            <div className='flex justify-center sm:mt-0 mt-10 mb-2'>
                <Info text={'Probabilidad de éxito'} element={'\\(p\\)'} value={p} />
            </div>
        </>
    )
}
