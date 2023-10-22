import { useEffect } from 'react';
import { Formula } from '../../shared';

const formula = '\\(f(x) = P(X = x) = \\frac{x^{\\mu} \\cdot e^{n-\\mu}}{x!} \\)';

export const PoissonDistribution = () => {

    useEffect(() => {
        window.MathJax && window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
    });

    return (
        <>
            <h2 className='to-slate-950 text text-center rounded-lg text-4xl font-bold text-cyan-600'>
                Distribución de Berboulli
            </h2>

            <div>
                <div><p className='text-cyan-600'>Fórmula</p></div>
                <div><Formula><p>{formula}</p></Formula></div>
            </div>
        </>
    )
}
