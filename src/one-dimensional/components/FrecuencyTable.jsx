import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { calculate, reset, setRoundedValue } from '../../store/frecuencyTableSlice';
import { Header, SelectType, SelectColumns, Table} from './';
import { Info, SelectRounded } from '../../shared';


export const FrecuencyTable = () => {
    const {
        n,
        arithmeticMean,
        arithmeticMeanPw2,
        variance,
        deviation,
        roundedTo
    } = useSelector(state => state.frecuencyTable);

    const dispatch = useDispatch();

    useEffect(() => {
        window.MathJax && window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
    })

    return (
        <>
            <Header />
            <div className='flex justify-center items-center flex-wrap m-2 rounded-md text-cyan-600'>
                <div className='p-2'>
                    <SelectRounded 
                        actualRoundedValue={roundedTo}
                        limit={3}
                        dispatchSettingFunction={setRoundedValue}
                        dispatchCalculateFuntion={calculate}
                    />
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
                <Info text={'Cantidad total de datos'} element={'\\(n\\)'} value={n} />
                <Info text={'Media arimética'} element={'\\(\\bar{x}\\)'} value={arithmeticMean} />
                <Info text={'Cuadrado de la media arimética'} element={'\\(\\bar{x}^2\\)'} value={arithmeticMeanPw2} />
                <Info text={'Varianza'} element={'\\(\\sigma^2\\)'} value={variance} />
                <Info text={'Desviación estándar'} element={'\\(\\sigma\\)'} value={deviation} />
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
