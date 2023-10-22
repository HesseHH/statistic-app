import React, { useRef, useState } from 'react';

export const Tooltip = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const toolipRef = useRef(null);

    const handleMouseEnter = () => {
        setShowTooltip(true)
        setTimeout(() => {
            if (toolipRef.current.getBoundingClientRect().right > window.innerWidth) {
                const aux = toolipRef.current.getBoundingClientRect().right - window.innerWidth;
                toolipRef.current.style.left = (-aux-20)+'px';
            }
        }, 0);
    }
    const handleMouseLeave = () => setShowTooltip(false);

    return (
        <div
            className='relative inline-block'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {showTooltip && (
                <div
                    ref={toolipRef}
                    className='absolute bottom-full w-40 overflow-hidden bg-slate-950 text-white px-2 py-1 rounded'
                >
                    {text}
                </div>
            )}
        </div>
    )
}
