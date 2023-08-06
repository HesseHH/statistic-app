
export const Subtitle = ({ text }) => {
    return (
        <div>
            <h2 className='text-2xl text-cyan-600'>{text}</h2>
            <div className='flex justify-center'>
                <hr className='w-20 border-t-1 border-cyan-500 my-4' />
            </div>
        </div>
    )
}
