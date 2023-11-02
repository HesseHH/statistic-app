import { useEffect, useRef } from 'react';
import { Link } from './';

export const SubLink = ({ childs, activated }) => {
    const divRef = useRef(null);

    return (
        <div 
            className='px-2 overflow-hidden'
            style={{
                height: !activated ? '0px' : `${divRef ? divRef.current.clientHeight : ''}px`,
                transition: "320ms ease-in-out",
            }}
        >
            <div
                className={`${childs.childrens ? 'pl-4' : 'pl-11'} overflow-hidden mt-2`}
            >
                <div ref={divRef}>
                    {childs.map((child, i) => (
                        <div key={i} className='xxx'>
                            <Link
                                text={child.text}
                                link={child.link}
                                childs={child.childrens}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
