import React, { useEffect } from 'react';
import { LineChart, Formula, Info, Input, SelectRounded, TableDistribution, Button } from '../../shared';
import { useDispatch, useSelector } from 'react-redux';
import { calculate, setNValue, setPSuccessValue, setRoundedValue } from '../../store/binomialDistributionSlice';

const formula = '\\(f(x) = P(X = x) = \\begin{cases} {n \\choose x} p^x(1-p)^{n-x} & \\text{si } x=0, 1, \\cdot\\cdot\\cdot, n \\\\0 & \\text{en otro caso} \\end{cases} \\)';
const formula2 = '\\(f(x) = P(X = x) = \\frac{n!}{x!(n-x)!} \\cdot p^x(1-p)^{n-x}\\)';

export const BinomialDistribution = () => {

  const { p, n, results, roundedTo, isCalculated } = useSelector(state => state.binomialDistribution);
  const dispatch = useDispatch();

  useEffect(() => {
    window.MathJax && window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
  });

  return (
    <div className='text-gray-900 dark:text-cyan-600'>
      <h1 className='to-slate-950 text mt-2 text-center rounded-lg text-4xl font-bold text-zinc-200 dark:text-cyan-600'>
        Distribución binomial
      </h1>

      <hr className='border-cyan-500 my-3 border-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />

      {/* Definition */}
      <section className='m-4 p-2 rounded-md '>
        <h2 className='font-bold text-lg'>Definición:</h2>
        <p>
          Se dice que una variable aleatoria {'\\(X\\)'} tiene una distribución binomial de parámetros&nbsp;
          {'\\(n\\)'} y {'\\(p\\)'}, si su función de probabilidad está dada por:
        </p>
        <Formula><p className='sm:text-xl text-lg'>{formula}</p></Formula>
        <p>
          donde {'\\(n\\)'} es un entero positivo y
          &nbsp;{'\\(0 \\leq p \\leq 1\\)'}.
        </p>
        <p>
          Se escribe {'\\(X \\sim B(n, p)\\)'} o {'\\(X \\stackrel{d}{=} B(n, p)\\)'}&nbsp;
          para indicar que la variable {'\\(X\\)'} tiene una distribución binomial de parámetros&nbsp;
          {'\\(n\\)'} y {'\\(p\\)'}.
        </p>
        <p>
          
        </p>
      </section>

      {/* <section className='bg-slate-800 m-4 p-2 rounded-md'>
        <h2 className='font-bold text-lg'>Funciones equivalentes:</h2>
        <div className='my-4'>
          <Formula><p className='sm:text-3xl text-lg'>{formula}</p></Formula>
        </div>
      </section> */}


      {/* Configuración */}
      <section className='sm:grid block grid-rows-1 grid-cols-2 lg:grid-cols-3 test'>
        <div>
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
                <h2 className='text-xl'>Probabilidad de éxito</h2>
                <div className='text-center'>
                  <Input
                    value={p}
                    functionDispatch={setPSuccessValue}
                  />
                </div>
              </div>

              <div className='p-2 pb-4'>
                <h2 className='text-xl'>Cantidad de ensayos</h2>
                <div className='text-center'>
                  <Input
                    value={n}
                    functionDispatch={setNValue}
                  />
                </div>
              </div>

              <div className='flex justify-center'>
                <Button
                  text='Calcular'
                  urlImg='/calculate.svg'
                  dispatchFunction={calculate}
                />
              </div>
            </div>
          </div>
        </div>
        <TableDistribution
          isCalculated={isCalculated}
          headers={['\\(x\\)', '\\(f(x)\\)']}
          values={results}
        />
        <div className='mr-2 w-full'>
          <LineChart
            isCalculated={isCalculated}
            x={results.map(item => item.x)}
            y={results.map(item => item.value)}
            yLabel='Probabilidad'
            xLabel='x'
          />
        </div>
      </section>

      <div className='flex justify-center sm:mt-0 mt-10 mb-2'>
        <Info text={'Probabilidad de éxitos'} element={'\\(p\\)'} value={p} />
        <Info text={'Cantidad de ensayos'} element={'\\(n\\)'} value={n} />
      </div>
    </div>
  )
}
