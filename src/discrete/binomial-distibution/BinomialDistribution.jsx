import React, { useEffect } from 'react';
import { BarChart, Formula, Info, Input, SelectRounded, TableDistribution, round } from '../../shared';
import { useDispatch, useSelector } from 'react-redux';
import { calculate, setNValue, setPSuccessValue, setRoundedValue } from '../../store/binomialDistributionSlice';

const formula = '\\(f(x) = P(X = x) = \\frac{n!}{x!(n-x)!} \\cdot p^x(1-p)^{n-x}\\)';

export const BinomialDistribution = () => {

  const { p, n, results, roundedTo, isCalculated } = useSelector(state => state.binomialDistribution);
  const dispatch = useDispatch();

  useEffect(() => {
    window.MathJax && window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
  });

  return (
    <>
      <h1 className='to-slate-950 text mt-2 text-center rounded-lg text-4xl font-bold text-cyan-600'>
        Distribución binomial
      </h1>

      <div>
        {/* <div><p className='text-cyan-600'>Fórmula</p></div> */}
        <div className='my-4'>
          <Formula><p className='sm:text-3xl text-lg'>{formula}</p></Formula>
        </div>
      </div>

      <div className='flex justify-center'>
      <SelectRounded
          actualRoundedValue={roundedTo}
          limit={5}
          dispatchSettingFunction={setRoundedValue}
          dispatchCalculateFuntion={calculate}

        />
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

            <div className='p-2 pb-4'>
              <h2 className='text-xl text-cyan-600'>Cantidad de ensayos</h2>
              <div className='text-center'>
              <Input
                value={n}
                functionDispatch={setNValue}
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

        <BarChart
          isCalculated={isCalculated}
          x={results.map(item => item.x)}
          y={results.map(item => item.value)}
          yLabel='Probabilidad'
          xLabel='x'
        />
      </div>


      <div className='flex justify-center sm:mt-0 mt-10 mb-2'>
        <Info text={'Probabilidad de éxitos'} element={'\\(p\\)'} value={p} />
        <Info text={'Cantidad de ensayos'} element={'\\(n\\)'} value={n} />
      </div>
    </>
  )
}
