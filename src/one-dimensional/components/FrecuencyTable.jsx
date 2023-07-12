import React, { useEffect, useMemo, useState } from 'react'
import { columns } from '../data'
import { uuid } from '../utils';
import { Field } from './Field';

// const keysColumns = [columns[0], columns[1], columns[2], columns[10], columns[11]];
const initialData = [
    {
        id: uuid()
    }
]

export const FrecuencyTable = () => {

    const [keysColumns, setKeysColumns] = useState([]);
    const [data, setData] = useState([]);

    // const data = useMemo(() => [], [])

    useEffect(() => {
        setKeysColumns([columns[0], columns[1], columns[2], columns[10], columns[11]]);
        setData(columns.map(col => {
            return {
                id: uuid(),
                colID: col.id,
                value: 0
            }
        }))
    }, []);

    console.log(data)


    return (
        <>
            <div>FrecuencyTable</div>
            <table>
                <thead>
                    <tr>
                        {keysColumns.map(col => (
                            <th>{col.abbreviation}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {keysColumns.map(col => (
                            <Field
                                {...col}
                                data={data}
                            />
                        ))}
                        {/* <td>20</td>
                        <td>2</td>
                        <td>0.3</td> */}
                    </tr>
                </tbody>
            </table>
        </>
    )
}
