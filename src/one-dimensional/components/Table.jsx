import { useDispatch, useSelector } from 'react-redux';

import { addRow, removeRow, setFrecAbs, setXValue } from '../../store/frecuency-table/frecuencyTableSlice';
import { Tooltip, Input } from '../../shared';
import { Field } from './';

export const Table = () => {

    const { columns, rows, groupedData } = useSelector(state => state.frecuencyTable);
    const dispatch = useDispatch();

    return (
        <div className='relative'>
            <div className="bg-slate-800 shadow-md rounded-md gray ml-4 relative">
                <table className="min-w-full divide-y divide-cyan-400 bg-slate-800 pb-6">
                    <thead className="bg-slate-900">
                        <tr>
                            <th className="px-6 py-3 text-center text-xs font-semibold text-cyan-600 tracking-wider"
                            >
                                {groupedData ? "Datos" : "\\(x\\)"}
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-semibold text-cyan-600 tracking-wider"
                            >
                                <Tooltip text='Frecuencia absoluta'>
                                    {"\\(f\\)"}
                                </Tooltip>
                            </th>
                            {columns.map(col => (
                                <th
                                    key={col.id}
                                    className="px-6 py-3 text-center text-xs font-semibold text-cyan-600 tracking-wider"
                                >
                                    <Tooltip text={col.name}>
                                        {col.abbreviation}
                                    </Tooltip>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-cyan-400 bg-slate-800">
                        {rows.map(row => (
                            <tr key={row.id} className="px-6 whitespace-nowrap text-center">
                                <td className=' relative overflow-visible'>
                                    <div className='absolute top-4 -left-3'>
                                        <button
                                            className='bg-red-900 hover:bg-red-600 w-5 rounded-md'
                                            onClick={() => dispatch(removeRow({ id: row.id }))}
                                        >
                                            <img src="/remove.svg" alt="" />
                                        </button>
                                    </div>
                                    {groupedData
                                        ? <>
                                            <div>
                                                <Input
                                                    value={row.upperLimit}
                                                    id={row.id}
                                                    upperLimit={row.upperLimit}
                                                    functionDispatch={setXValue}
                                                />
                                                ;
                                                <Input
                                                    value={row.lowerLimit}
                                                    id={row.id}
                                                    lowerLimit={row.lowerLimit}
                                                    functionDispatch={setXValue}
                                                />
                                            </div>
                                        </>
                                        : <>
                                            <Input
                                                value={row.value}
                                                id={row.id}
                                                functionDispatch={setXValue}
                                            />
                                        </>}
                                </td>
                                <td>
                                    <Input
                                        value={row.frec_abs}
                                        id={row.id}
                                        functionDispatch={setFrecAbs}
                                    />
                                </td>
                                {columns.map(col => (
                                    <Field
                                        key={col.id}
                                        {...col}
                                        dataRow={row}
                                    />
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='absolute -bottom-9 left-3 flex'>
                    <button
                        className='w-10 h-10 rounded-full mr-1 bg-cyan-600 flex justify-center items-center hover:bg-cyan-500'
                        onClick={() => dispatch(addRow())}
                    >
                        <img src="/add_circle.svg" />
                    </button>
                    {/* <button
                        className='w-10 h-10 rounded-full bg-cyan-600 flex justify-center items-center hover:bg-cyan-500'
                    >
                        <img src="/add.svg" className='w-6' />
                    </button> */}
                </div>
            </div>
        </div>
    )
}
