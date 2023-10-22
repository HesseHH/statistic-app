import { useDispatch } from "react-redux";

export const Input = ({ value, id = null, functionDispatch, upperLimit = null, lowerLimit = null }) => {

    const dispatch = useDispatch();
    const handleOnFocus = event => event.target.select();

    return (
        <input
            type="number"
            value={value}
            onFocus={handleOnFocus}
            className="no-spin w-14 text-cyan-600 text-center bg-transparent outline-none hover:border-b-cyan-500 focus:border-b-cyan-500 border-b-2"
            onChange={({ target }) => dispatch(functionDispatch({ 
                id, 
                value: target.value, 
                upperLimit: upperLimit == null ? null : target.value, 
                lowerLimit: lowerLimit == null ? null : target.value
            }))}
        />
    )
}
