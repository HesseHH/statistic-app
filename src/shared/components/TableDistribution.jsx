import { useEffect, useRef, useState } from 'react';

import '../css/scrollbar.css'

export const TableDistribution = ({ isCalculated, headers, values }) => {

    const [totalHeightTable, setTotalHeightTable] = useState(0);
    const tbody = useRef();

    useEffect(() => {
        window.MathJax && window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
    });

    useEffect(() => {
        if (tbody.current) {
            const trs = tbody.current.querySelectorAll('tr');
            console.log(trs)
            const heightTr = trs[0].clientHeight;
            console.log(heightTr)
            console.log(heightTr * 10)
            setTotalHeightTable(heightTr * 10);
        }
    }, [values]);

    return (
        <>
            {isCalculated
                ?
                <div
                    className='m-2 shadow-md rounded-md algo overflow-x-hidden'
                    style={{
                        overflowY: values.length > 10 ? 'auto' : '',
                        maxHeight: values.length > 10 ? totalHeightTable : ''
                    }}
                >
                    <table
                        className='text-cyan-600 table-auto min-w-full rounded-md divide-y divide-cyan-400 bg-slate-800 pb-6'
                    >
                        <thead className='sticky top-0 bg-slate-800'>
                            <tr className='p-6 font-bold'>
                                {headers.map((header, i) => (
                                    <th key={i + 'th'}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-cyan-400 bg-slate-800 h-56' ref={tbody}>
                            {values.map((value, i) => (
                                <tr key={i} className='px-6 whitespace-nowrap text-center'>
                                    {Object.keys(value).map((key, j) => (
                                        <td key={i + '-' + j} className='px-3 py-1'>{value[key]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> : <></>}
        </>
    )
}
