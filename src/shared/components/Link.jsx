import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SubLink } from './';
import { toggleOpen } from '../../store';

import '../css/arrow.css';

export const Link = ({ text, link, childs }) => {

    const [activated, setActivated] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
      if (location.pathname.includes(link)) setActivated(true);
    }, []);

    const handleActivateClick = ({ target }, isArrow) => {
        const id = target.dataset?.arrowId;
        if (!isArrow) dispatch(toggleOpen());
        if (!id && location.pathname === link && activated) return;
        setActivated(x => !x);
    }

    return (
        <div className='px-2'>
            <div className='flex items-center'>
                {childs ? <div className='flex items-center mr-1' onClick={(event) => handleActivateClick(event, true)}>
                    <div className='relative hover:bg-slate-800 p-2 rounded-full cursor-pointer flex justify-center items-center'>
                        <div data-arrow-id='xx' className='absolute top-0 block w-full h-full z-10'></div>
                        <div className={`arrow ${activated ? 'down' : 'right'}`}></div>
                    </div>
                </div> : <></>}
                <NavLink
                    to={link}
                    onClick={(event) => handleActivateClick(event, false)}
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-slate-800 text-slate-50 rounded-md mt-1 w-full'
                            : 'text-cyan-600 rounded-md mt-1 w-full'
                    }>
                    <div className={`hover:bg-slate-800 rounded-md p-2${childs ? ' font-bold' : ''}`}>
                        {text}
                    </div>
                </NavLink>
            </div>
            {childs
                ? <SubLink childs={childs} activated={activated} />
                : <></>}
        </div>
    )
}
