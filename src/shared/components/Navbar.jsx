import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();

  return (
    <div className='block p-2 bg-slate-900 text-cyan-600'>
        <ul className='flex cursor-pointer '>
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
        </ul>
    </div>
  )
}
