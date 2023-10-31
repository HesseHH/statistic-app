import { useDispatch } from 'react-redux';

import { toggleOpen } from '../../store';

export const Navbar = () => {

    const dispatch = useDispatch();

    const handleClick = (event) => {
        dispatch(toggleOpen());
    }

  return (
    <div className='block p-2 bg-slate-900 text-cyan-600'>
        <p className='md:hidden inline-block' onClick={handleClick}>open</p>
        <p className='ml-6 inline-block'>buscador</p>
        {/* <ul className='flex cursor-pointer '>
            <li 
                className='list-none pr-4'
                onClick={() => navigate('/')}
            >Tabla de frecuencias</li>

            <li 
                className='list-none pr-4'
                onClick={() => navigate('/discrete/binomial-distribution')}
            >
                Distribución binomial
            </li>

            <li 
                className='list-none pr-4'
                onClick={() => navigate('/discrete/bernoulli-distribution')}
            >
                Distribución de Bernoulli
            </li>

            <li 
                className='list-none pr-4'
                onClick={() => navigate('/discrete/poisson-distribution')}
            >
                Distribución de Poisson
            </li>
        </ul> */}
    </div>
  )
}
