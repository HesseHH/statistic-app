import { Tooltip } from './Tooltip';

export const Info = ({ text, element, value }) => {
    return (
        <>
            <Tooltip text={text}>
                <p 
                    className='text-cyan-600 bg-slate-900 p-3 m-2 rounded-lg text-lg'
                >
                    {element}: {value}
                </p>
            </Tooltip>
        </>
    )
}
