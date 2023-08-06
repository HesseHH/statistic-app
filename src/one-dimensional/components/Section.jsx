import { Subtitle } from './Subtitle';

export const Section = ({ subtitle, children }) => {
  return (
    <div className='bg-slate-900 p-2'>
        <Subtitle text={subtitle} />
        {children}
    </div>
  )
}
