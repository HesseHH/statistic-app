import { useDispatch, useSelector } from 'react-redux';

import { Link } from './';
import { useEffect, useState } from 'react';
import { toggleOpen } from '../../store';

const links = [
    {
        text: 'Tabla de frecuencias',
        link: '/'
    },
    {
        text: 'Discrete',
        link: '/discrete',
        childrens: [
            {
                text: 'Distribción de Berboulli',
                link: '/discrete/bernoulli-distribution'
            },
            {
                text: 'Distribción Binomial',
                link: '/discrete/binomial-distribution'
            },
            {
                text: 'Distribción de Poisson',
                link: '/discrete/poisson-distribution'
            }
        ]
    }
];

export const SideBar = () => {
    const { isOpened, open, close } = useSelector(state => state.sidebar);
    const [isLessthan, setIsLessthan] = useState(window.innerWidth < 768);
    const [initDisplayNone, setInitDisplayNone] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const resizeEvent = () => {
            if (window.innerWidth < 768) setIsLessthan(true)
            else setIsLessthan(false)
        }
        window.addEventListener('resize', resizeEvent);

        setTimeout(() => {
            setInitDisplayNone(false);
        }, 2000);
    }, []);

    return (
        <>
            <div className={`${isLessthan ? 'absolute top-0 left-0' : 'block'} flex h-screen z-10 animated ${!isLessthan ? '' : isOpened ? 'fadeInLeft' : 'fadeOutLeft'}`}
                style={{
                    width: isLessthan ? '100%': '220px'
                }}
            >
                <div
                    className={`h-screen`}
                    style={{
                        minWidth: isLessthan ? '300px' : '220px',
                        maxWidth: isLessthan ? '300px' : '220px',
                        opacity: !isLessthan ? '' : initDisplayNone ? '0' : '1'
                    }}
                >
                    <div className={`bg-gray-950 transition-all z-10 h-screen`}
                        style={{ minWidth: isLessthan ? '300px' : '220px' }}
                    >
                        <div className='flex flex-col'>
                            <div>
                                <h1 className='text-cyan-600'>Menú</h1>
                            </div>

                            <div className='flex flex-col'>
                                {links.map((link, i) => (
                                    <div key={i}>
                                        <Link
                                            text={link.text}
                                            link={link.link}
                                            childs={link.childrens}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`z-10 ${isLessthan ? 'w-full' : '220px'} h-screen`}
                    onClick={() => dispatch(toggleOpen())}
                    style={{
                        backgroundImage: 'linear-gradient(#0307126b, #0307126b)'
                    }}
                ></div>
            </div>

        </>
    )
}
