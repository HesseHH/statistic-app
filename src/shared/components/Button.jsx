import { useDispatch } from 'react-redux'

export const Button = ({ text, urlImg, dispatchFunction }) => {

    const dispatch = useDispatch();

    return (
        <button
            className='rounded-full bg-cyan-600 text-lg mr-2 text-slate-950 p-2 w-40 hover:bg-cyan-500'
            onClick={() => dispatch(dispatchFunction())}
        >
            <div className='flex justify-center items-center'>
                <img src={urlImg} />
                <span className='ml-2'>{text}</span>
            </div>
        </button>
    )
}
