import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { toggleGroupedDataValue } from '../../store/frecuencyTableSlice';

export const SelectType = () => {
    const [isMovingRight, setIsMovingRight] = useState(false);
    const dispatch = useDispatch();

    const handleSwitchClick = () => {
        setIsMovingRight((prevIsMovingRight) => !prevIsMovingRight);
        dispatch(toggleGroupedDataValue());
    };

    return (
        <div className='flex items-center cursor-pointer' onClick={handleSwitchClick}>
            <div className={`${isMovingRight ? 'text-cyan-800' : 'text-cyan-500'}`}>Datos no agrupados</div>
            <div className={`w-12 relative ml-2 mr-2`}>
                <div className='flex items-center'>
                    <div className="h-[1px] w-full bg-cyan-500" />
                </div>
                <div className={`absolute -top-2 ${isMovingRight ? 'left-8' : 'left-0'} transition-[left] rounded-full w-4 h-4 bg-cyan-500 `}/>
            </div>
            <div className={`${isMovingRight ? 'text-cyan-500' : 'text-cyan-800'}`}>datos agrupados</div>
        </div>
    );
}
