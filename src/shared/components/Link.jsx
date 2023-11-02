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
        <>
            <div className='px-2 overflow-hidden'>
                <div className='flex items-center'>
                    {childs ? <div className='flex items-center mr-1' onClick={(event) => handleActivateClick(event, true)}>
                        <div className='relative hover:bg-slate-800 p-2 rounded-full cursor-pointer flex justify-center items-center'>
                            <div data-arrow-id='xx' className='absolute top-0 block w-full h-full z-50'></div>
                            <svg
                                key="exclude"
                                style={{
                                    transform: `rotate(${activated ? 0 : -90}deg)`,
                                    transition: "320ms ease-in-out",
                                    color: '#0891b2'
                                }}
                                width="20"
                                height="20"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.5 10L15.6714 21L27.5 10"
                                    stroke="currentColor"
                                    color='#0891b2'
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
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
            </div>
                {childs && <SubLink childs={childs} activated={activated} />}
        </>
    )
}
