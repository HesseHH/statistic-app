import { useDispatch, useSelector } from 'react-redux';

import { calculate, setRoundedValue } from '../../store/frecuency-table/frecuencyTableSlice';

export const SelectRounded = () => {
  const { roundedTo } = useSelector(state => state.frecuencyTable);
  const dispatch = useDispatch();

  const onChangeValue = ({target}) => {
    dispatch(setRoundedValue({value: target.value}));
    dispatch(calculate());
  };
  
  return (
    <div>
      <span>Redondeo:</span>
      <select
        className='appearance-none border-0 outline-0 w-60 h-10 text-white pl-3 ml-2 cursor-pointer customBackground hover:bg-slate-900'
        value={`${roundedTo}`}
        onChange={onChangeValue}
      >
        <option className='bg-slate-950' value="1">Décima</option>
        <option className='bg-slate-950' value="2">Centésima</option>
        <option className='bg-slate-950' value="3">Milésima</option>
      </select>
    </div>
  )
}