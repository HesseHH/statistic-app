import { useEffect } from 'react';

export const TableDistribution = ({ isCalculated, headers, values }) => {

    useEffect(() => {
        window.MathJax && window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
    });
    
    return (
        <>
            {isCalculated ? <div className='p-0 m-2 shadow-md rounded-md'>
                <table className='text-cyan-600 min-w-full rounded-md divide-y divide-cyan-400 bg-slate-800 pb-6'>
                    <thead className=''>
                        <tr className='p-6 font-bold'>
                            {headers.map((header, i) => (
                                <th key={i+'th'}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-cyan-400 bg-slate-800'>
                        {values.map((value, i) => (
                            <tr key={i} className='px-6 whitespace-nowrap text-center'>
                                {Object.keys(value).map(key => (
                                    <td key={i+'-'+value[key]} className='px-3 py-1'>{value[key]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> : <></>}
        </>
    )
}
