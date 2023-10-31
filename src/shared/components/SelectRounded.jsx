import { useDispatch, useSelector } from 'react-redux';

const aproximations = ['Décima', 'Centésima', 'Milésima', 'Diezmilésima', 'Cienmilésima'];

const fill = (numberOfFills) => {
  let array = [];
  for (let i = 0; i < numberOfFills; i++) {
    array.push(Math.random() * 1);
  }
  return array;
}

export const SelectRounded = ({ actualRoundedValue, limit, dispatchSettingFunction, dispatchCalculateFuntion }) => {
  const dispatch = useDispatch();

  const roundingNumbers = fill(limit);

  const onChangeValue = ({target}) => {
    dispatch(dispatchSettingFunction({value: target.value}));
    dispatch(dispatchCalculateFuntion());
  };
  // console.log(roundingNumbers);
  return (
    <div className='p-2 text-cyan-600'>
      <span className='lg:ml-0 ml-2'>Redondeo:</span>
      <select
        key={limit}
        className='appearance-none border-0 outline-0 w-60 h-10 text-white pl-3 ml-2 cursor-pointer customBackground hover:bg-slate-900'
        value={`${actualRoundedValue}`}
        onChange={onChangeValue}
      >
        {roundingNumbers.map((_, i) => (
          <option key={i+limit} className='bg-slate-950' value={i + 1}>{aproximations[i]}</option>
        ))}
      </select>
    </div>
  )
}